const strs = ["flower", "flow", "flight"];
if (strs.length === 0) return "";

let prefic = strs[0];

for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefic) !== 0) {
        prefic = prefic.slice(0, -1);
        if (prefic === "") return "";
    }
}

return prefic;