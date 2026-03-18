var _a, _b;
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
var repoName = (_b = (_a = process.env.GITHUB_REPOSITORY) === null || _a === void 0 ? void 0 : _a.split("/")[1]) !== null && _b !== void 0 ? _b : "DEIN-REPO-NAME";
export default defineConfig(function (_a) {
    var mode = _a.mode;
    return ({
        plugins: [react()],
        base: mode === "production" ? "/".concat(repoName, "/") : "/"
    });
});
