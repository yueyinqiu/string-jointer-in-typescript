export class StringJointer {
    private value: string | null = null;
    public emptyValue: string;

    constructor(public delimiter: string,
        public prefix: string = "",
        public suffix: string = "") {
        this.emptyValue = this.prefix + this.suffix;
    }

    public add(newElement: string) {
        this.value = this.prepareValue + newElement;
        return this;
    }

    public get length() {
        if(this.value === null)
            return this.emptyValue.length;
        return this.value.length + this.suffix.length + this.prefix.length;
    }

    public merge(other: StringJointer) {
        if(other.value === null)
            return this;
        this.value = this.prepareValue + other.value;
        return this;
    }

    private get prepareValue()
    {
        if(this.value === null)
            return "";
        return this.value + this.delimiter;
    }

    public toString() {
        if (this.value === null)
            return this.emptyValue;
        return this.prefix + this.value + this.suffix;
    }
}
