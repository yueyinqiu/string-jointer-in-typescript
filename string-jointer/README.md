# Usages
```typescript
import { StringJointer } from "../src/string-jointer";

let a = new StringJointer("great", "what", "jointer");
a.add("a").add("string");
a.toString(); // === "whatagreatstringjointer"
a.length; // === "whatagreatstringjointer".length

a.addMany(["abc", "def"]);
```