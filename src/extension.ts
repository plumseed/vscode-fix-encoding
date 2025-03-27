import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    const fixEncoding = () => {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            vscode.window.showWarningMessage('请先打开一个工作区再执行该命令。');
            return;
        }
        const rootPath = workspaceFolders[0].uri.fsPath;
    
        // 1. 写入 .env 文件
        const envPath = path.join(rootPath, '.env');
        const envContent = 'PYTHONIOENCODING=UTF-8\n';
        fs.writeFileSync(envPath, envContent, { encoding: 'utf8', flag: 'w' });
    
        // 2. 写入 .vscode/settings.json（含 Code Runner、终端、调试默认配置）
        const vscodeDir = path.join(rootPath, '.vscode');
        if (!fs.existsSync(vscodeDir)) {
            fs.mkdirSync(vscodeDir);
        }
    
        const settingsPath = path.join(vscodeDir, 'settings.json');
        let settings: { [key: string]: any } = {};
        if (fs.existsSync(settingsPath)) {
            try {
                settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
            } catch {
                vscode.window.showWarningMessage('settings.json 格式错误，将被覆盖。');
            }
        }
    
        settings["terminal.integrated.defaultEncoding"] = "utf8";
        settings["python.envFile"] = "${workspaceFolder}/.env";
        settings["debug.defaultLaunchConfigurationName"] = "Run Python with env";
        settings["code-runner.runInTerminal"] = true;
        settings["code-runner.executorMap"] = settings["code-runner.executorMap"] || {};
        settings["code-runner.executorMap"]["python"] = "python -u";
    
        fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 4), 'utf8');
    
        // 3. 写入 .vscode/launch.json
        const launchPath = path.join(vscodeDir, 'launch.json');
        const launchConfig = {
            version: "0.2.0",
            configurations: [
                {
                    name: "Run Python with env",
                    type: "python",
                    request: "launch",
                    program: "${file}",
                    console: "integratedTerminal",
                    envFile: "${workspaceFolder}/.env"
                }
            ]
        };
        fs.writeFileSync(launchPath, JSON.stringify(launchConfig, null, 4), 'utf8');
    
        vscode.window.showInformationMessage('✅ 中文编码配置已修复！运行按钮已默认使用终端方式，不再乱码！');
    };
    
    // 注册两个命令：中英文共存
    context.subscriptions.push(
        vscode.commands.registerCommand('fix-encoding.fix', fixEncoding),
        vscode.commands.registerCommand('fix-encoding.fixAlias', fixEncoding)
    );
    
}

export function deactivate() {}
