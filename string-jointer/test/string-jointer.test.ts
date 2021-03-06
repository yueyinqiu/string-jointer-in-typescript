import { StringJointer } from "../src/string-jointer";

var a = new StringJointer("sp","a","z");
a.add("bc");
a.add("de");

test('hello world test', () => {
    expect(a.toString()).toBe("abcspdez");
});