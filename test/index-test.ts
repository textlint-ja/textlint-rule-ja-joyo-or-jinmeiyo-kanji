import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();

tester.run('ja-joyo-or-jinmeiyo-kanji', rule, {
  valid: ['伊藤さんは兎を飼っています。'],
  invalid: [
    {
      text: '伊藤さんは蛙を飼っています。',
      errors: [
        {
          message: '常用漢字でも人名用漢字でもない漢字「蛙」が含まれています。',
          line: 1,
          column: 6
        }
      ]
    }
  ]
});
