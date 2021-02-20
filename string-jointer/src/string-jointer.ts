export class StringJointer {
    private result: string = "";
    private emptyValue: string = "";

    constructor(public delimiter: string, public prefix: string = "", public suffix: string = "") {
    }

    add(newElement: string) {
        this.result += newElement;
        this.result += this.delimiter;
        return this;
    }

    get length() {
        return this.result.length + this.suffix.length + this.prefix.length;
    }

    merge​(other: StringJointer) {
        this.result += other.result;
        return this;
    }

    setEmptyValue​(emptyValue: string)
    {
        return this;
    }
}
