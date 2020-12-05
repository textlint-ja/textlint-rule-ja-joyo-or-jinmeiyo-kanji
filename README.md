# textlint-rule-ja-joyo-or-jinmeiyo-kanji

常用漢字または人名用漢字であることをチェックするtextlintルール

- [常用漢字 - Wikipedia](https://ja.wikipedia.org/wiki/%E5%B8%B8%E7%94%A8%E6%BC%A2%E5%AD%97)
- [人名用漢字 - Wikipedia](https://ja.wikipedia.org/wiki/%E4%BA%BA%E5%90%8D%E7%94%A8%E6%BC%A2%E5%AD%97)

```
1:1  error    常用漢字でも人名用漢字でもない漢字「蛙」が含まれています。  ja-joyo-or-jinmeiyo-kanji
```

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-ja-joyo-or-jinmeiyo-kanji

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "ja-joyo-or-jinmeiyo-kanji": true
    }
}
```

Via CLI

```
textlint --rule ja-joyo-or-jinmeiyo-kanji README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## Disclaimer

The following creations are included in this product:

- [人名用漢字一覧 - Wikipedia](https://ja.wikipedia.org/wiki/%E4%BA%BA%E5%90%8D%E7%94%A8%E6%BC%A2%E5%AD%97%E4%B8%80%E8%A6%A7)
- [人名用漢字 - Wikipedia](https://ja.wikipedia.org/wiki/%E4%BA%BA%E5%90%8D%E7%94%A8%E6%BC%A2%E5%AD%97)

Please see also [DISCLAIMER.md](https://github.com/hata6502/textlint-rule-ja-joyo-or-jinmeiyo-kanji/blob/master/DISCLAIMER.md).

## License

CC-BY-SA-3.0 © Tomoyuki Hata
