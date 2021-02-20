/**
 * A string jointer.
 */
export class StringJointer {
    private value: string | null = null;

    /**
     * Gets or sets the string to be used when determining the string representation of this StringJoiner and no elements have been added yet, that is, when it is empty. A copy of the emptyValue parameter is made for this purpose. Note that once an add method has been called, the StringJoiner is no longer considered empty, even if the element(s) added correspond to the empty string.
     */
    public emptyValue: string;

    /**
     * Constructs a StringJoiner with no characters in it using the supplied prefix, delimiter and suffix. If no characters are added to the StringJoiner and methods accessing the string value of it are invoked, it will return the prefix + suffix (or properties thereof) in the result, unless setEmptyValue has first been called.
     * @param delimiter the string to be used between each element added to the StringJoiner
     * @param prefix the string to be used at the beginning
     * @param suffix the string to be used at the end
     */
    constructor(public delimiter: string,
        public prefix: string = "",
        public suffix: string = "") {
        this.emptyValue = this.prefix + this.suffix;
    }

    private get prepareValue() {
        if (this.value === null)
            return "";
        return this.value + this.delimiter;
    }

    /**
     * Adds a copy of the given string value as the next element of the StringJoiner value.
     * @param newElement the element to add
     */
    public add(newElement: string) {
        this.value = this.prepareValue + newElement;
        return this;
    }

    /**
     * Gets the length of the string representation of this StringJoiner. Note that if no add methods have been called, then the length of the string representation (either prefix + suffix or emptyValue) will be returned. The value should be equivalent to toString().length.
     */
    public get length() {
        if (this.value === null)
            return this.emptyValue.length;
        return this.value.length + this.suffix.length + this.prefix.length;
    }

    /**
     * Adds the contents of the given StringJoiner without prefix and suffix as the next element if it is non-empty. If the given StringJoiner is empty, the call has no effect.
     * A StringJoiner is empty if add() has never been called, and if merge() has never been called with a non-empty StringJoiner argument.
     * If the other StringJoiner is using a different delimiter, then elements from the other StringJoiner are concatenated with that delimiter and the result is appended to this StringJoiner as a single element.
     * @param other the StringJoiner whose contents should be merged into this one
     */
    public merge(other: StringJointer) {
        if (other.value === null)
            return this;
        this.value = this.prepareValue + other.value;
        return this;
    }

    /**
     * Returns the current value, consisting of the prefix, the values added so far separated by the delimiter, and the suffix, unless no elements have been added in which case, the prefix + suffix or the emptyValue characters are returned.
     */
    public toString() {
        if (this.value === null)
            return this.emptyValue;
        return this.prefix + this.value + this.suffix;
    }
}
