import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const command = vscode.commands.registerCommand(
    "textTools.toUpperCase",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor || editor.selection.isEmpty) {
        vscode.window.showInformationMessage("No text selected");
        return;
      }

      const text = editor.document.getText(editor.selection).toUpperCase();
      editor.edit((editBuilder) => {
        editBuilder.replace(editor.selection, text);
      });
    }
  );

  context.subscriptions.push(command);
}

export function deactivate() {}
