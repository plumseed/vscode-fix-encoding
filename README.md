
# 🛠️ Fix Chinese Encoding

A lightweight VSCode extension that fixes common Chinese character encoding issues when running Python in Windows terminals.

## ✅ Features

- 🔧 Adds `PYTHONIOENCODING=UTF-8` to `.env`
- 💻 Sets terminal default encoding to UTF-8
- 🚀 Ensures VSCode Run Button & Code Runner show proper Chinese
- ⚙️ Auto-generates `launch.json` & `settings.json`

## 🧪 Before vs After

| Before (乱码) | After (正常) |
|---------------|--------------|
| `ϵͳ�Ҳ���ָ����` | `系统找不到指定的路径。` ✅ |

## 🧩 How to Use

1. Install this extension
2. Press `Ctrl+Shift+P` → `Fix Chinese Encoding`
3. Done! You’re ready to go

## 🧩 使用方法

1. 安装此扩展插件
2. 按下 `Ctrl+Shift+P` → 选择 `修复中文编码问题` 或 `Fix Chinese Encoding`
3. ✅ 自动完成编码修复，终端输出无乱码，运行按钮也生效！

✨ 适配中文 VSCode 环境，也支持英文搜索命令！

## 📦 How to Install (via VSIX)

1️⃣ Click the **Extensions** icon in the left sidebar  
2️⃣ Click `⋯` (More Actions) in the top-right corner  
3️⃣ Select **Install from VSIX...**  
4️⃣ Choose your downloaded `.vsix` file (e.g., `fix-encoding-0.1.0.vsix`)  
5️⃣ ✅ Done! The extension is now installed

📥 [Download the latest VSIX file](https://github.com/plumseed/vscode-fix-encoding/releases)

---

## 📦 安装方式（通过 VSIX 文件）

1️⃣ 点击左侧边栏的 **扩展图标**  
2️⃣ 点击右上角 `⋯`（更多操作）  
3️⃣ 选择 **从 VSIX 安装...**  
4️⃣ 选择你下载的 `.vsix` 文件（例如 `fix-encoding-0.1.0.vsix`）  
5️⃣ ✅ 安装完成，插件已启用！

📥 [点击此处下载最新 VSIX 插件包](https://github.com/plumseed/vscode-fix-encoding/releases)


## 📄 License

MIT
