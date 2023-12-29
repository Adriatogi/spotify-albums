import { writeFileSync, existsSync, readFileSync } from 'fs'

interface UserState {
    labels: string[]
    map: Map<string, string[]>
}

class App {
    private _localSavePath: string = "local_save.json"
    private _userState: UserState = { labels: [], map: new Map() }

    constructor() {
        this.load();
    }

    get labels(): string[] {
        return this._userState.labels;
    }

    set labels(labels: string[]) {
        this._userState.labels = labels
    }

    get mapping(): Map<string, string[]> {
        return this._userState.map
    }

    set mapping(map: Map<string, string[]>) {
        this._userState.map = map
    }

    save(filePath: string = ""): void {
        const savePath = filePath || this._localSavePath;

        const userSave = {
            labels: this._userState.labels,
            map: this.map_to_object(this._userState.map),
        };

        writeFileSync(savePath, JSON.stringify(userSave));
        console.log("Save successfully");
    }

    load(filePath: string = ""): void {
        const savePath = filePath || this._localSavePath;

        if (existsSync(savePath)) {
            const userData: UserState = JSON.parse(readFileSync(savePath, 'utf-8'));

            const recoveredMap: Map<string, string[]> = new Map(
                Object.entries(userData.map)
            );

            this._userState = {
                labels: userData.labels,
                map: recoveredMap,
            }

            //console.log("Load successfull")
        } else {
            console.log("No save, empty initialization")
        }
    }

    private map_to_object(mapping: Map<string, string[]>) {
        const mapObject: { [key: string]: string[] } = {};
        for (const [key, value] of mapping) {
            mapObject[key] = value;
        }

        return mapObject
    }
}

export { App }