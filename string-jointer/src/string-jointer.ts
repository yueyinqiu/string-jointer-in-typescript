/**
 * A string jointer.
 */
export class StringJointer {
    private value: string | null = null;

    /**
     * Gets or sets the string representation that will be used when there is no element.
     */
    public emptyValue: string;

    /**
     * Constructs a `StringJoiner`.
     * @param delimiter the string that will be used between each element
     * @param prefix the string that will be used at the beginning
     * @param suffix the string that will be used at the end
     */
    constructor(public delimiter: string,
        public prefix: string = "",
        public suffix: string = "") {
        this.emptyValue = this.prefix + this.suffix;
    }

    private get preparedValue() {
        if (this.value === null)
            return "";
        return this.value + this.delimiter;
    }

    /**
     * Adds a string as the next element.
     * @param newElement the element to add
     */
    public add(newElement: string) {
        this.value = this.preparedValue + newElement;
        return this;
    }

    /**
     * Adds some strings as the next elements.
     * @param newElement the elements to add
     */
    public addMany(newElements: Iterable<String>) {
        if (newElements instanceof Array) {
            this.value = this.preparedValue + newElements.join(this.delimiter);
            return this;
        }

        let tempValue = this.preparedValue;
        for (let newElement of newElements) {
            tempValue += newElement;
            tempValue += this.delimiter;
        }
        this.value = tempValue.substring(0, tempValue.length - this.delimiter.length);
        return this;
    }

    /**
     * Gets the length of the string representation.
     */
    public get length() {
        if (this.value === null)
            return this.emptyValue.length;
        return this.value.length + this.suffix.length + this.prefix.length;
    }

    /**
     * Adds the contents of a `StringJoiner` without prefix and suffix as the next element.
     * If the given `StringJoiner` has no element, the call has no effect.
     * If the given `StringJoiner` is using a different delimiter, then elements from the other StringJoiner are concatenated with that delimiter, and the result is appended to this `StringJoiner` as a single element.
     * @param other the `StringJoiner` whose contents should be merged into this one
     */
    public merge(other: StringJointer) {
        if (other.value === null)
            return this;
        this.value = this.preparedValue + other.value;
        return this;
    }

    /**
     * Returns the string representation.
     */
    public toString() {
        if (this.value === null)
            return this.emptyValue;
        return this.prefix + this.value + this.suffix;
    }
}
