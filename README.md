# 🔠 Uppercase Selection VSCode Extension

A lightweight VS Code extension to quickly **convert selected text to UPPERCASE** via a context menu or command palette. Perfect for developers who frequently need text case transformations directly in the editor.

![VS Code](https://img.shields.io/badge/vscode-1.100+-blue?logo=visualstudiocode)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)

---

## ✨ Features

- 🔡 Converts any selected text to uppercase
- 🖱️ Available in right-click editor context menu
- ⌨️ Can also be triggered via Command Palette
- ⚡ Instant text replacement without delay
- 🎯 Only runs when text is selected

---

## ⚙️ Installation

### From VS Code Marketplace (recommended)

> _Coming soon: Will be available once published._

### From source (development)

1. Clone this repository:

   ```bash
   git clone https://github.com/hadzicni/uppercase-selection.git
   cd uppercase-selection
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile the extension:

   ```bash
   npm run compile
   ```

4. Open in VS Code and press `F5` to run in Extension Development Host.

---

## 🚀 Usage

1. Select any text in the editor.
2. Right-click and choose **"Convert Selection to UPPERCASE"**, or
3. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and search:
   ```
   Convert Selection to UPPERCASE
   ```
4. The selected text will be replaced with its uppercase version.

> ℹ️ If nothing is selected, the command will show a hint instead.

---

## 🧪 Testing

Run the tests using:

```bash
npm run test
```

---

## 👨‍💻 Author

Made by **Nikola Hadzic**  
GitHub: [@hadzicni](https://github.com/hadzicni)

---

## 📄 License

This extension is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
