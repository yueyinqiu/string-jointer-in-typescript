import { StringJointer } from "../src/string-jointer";

function getEmptyJointer() {
    var a = new StringJointer("nothing", "?", "!");
    return a;
}
function getGreatJointer() {
    var a = new StringJointer("great", "what", "jointer");
    a.add("a");
    a.add("string");
    return a;
}
function getEmotionJointer() {
    var a = new StringJointer("~awa~~~~~~~~~~~", "!!qaq!!!", "_+_+_+qwq");
    a.add("|^-^|");
    a.add("-_- -_-");
    a.add("--");
    return a;
}

test('pure add', () => {
    expect(getGreatJointer().toString()).toBe("whatagreatstringjointer");
    expect(getEmotionJointer().length).toBe(
        "!!qaq!!!|^-^|~awa~~~~~~~~~~~-_- -_-~awa~~~~~~~~~~~--_+_+_+qwq".length);
});

test('merge', () => {
    expect(getGreatJointer().merge(getEmotionJointer()).toString())
        .toBe("whatagreatstringgreat|^-^|~awa~~~~~~~~~~~-_- -_-~awa~~~~~~~~~~~--jointer");
});
test('addMany', () => {
    expect(getGreatJointer().addMany(["abc", "def"]).toString()).toBe("whatagreatstringgreatabcgreatdefjointer");
    expect(getGreatJointer().addMany(["abc", "def"]).length).toBe("whatagreatstringgreatabcgreatdefjointer".length);
    expect(getEmptyJointer().addMany(["abc", "def"]).toString()).toBe("?abcnothingdef!");

    let arrayLike = {
        0: 'abc',
        1: 'def',
        length: 2
    }
    expect(getGreatJointer().addMany(arrayLike).toString()).toBe("whatagreatstringgreatabcgreatdefjointer");
    expect(getGreatJointer().addMany(arrayLike).length).toBe("whatagreatstringgreatabcgreatdefjointer".length);
    expect(getEmptyJointer().addMany(arrayLike).toString()).toBe("?abcnothingdef!");

    function* iterable()
    {
        yield "abc";
        yield "def";
    }
    expect(getGreatJointer().addMany(iterable()).toString()).toBe("whatagreatstringgreatabcgreatdefjointer");
    expect(getGreatJointer().addMany(iterable()).length).toBe("whatagreatstringgreatabcgreatdefjointer".length);
    expect(getEmptyJointer().addMany(iterable()).toString()).toBe("?abcnothingdef!");
});