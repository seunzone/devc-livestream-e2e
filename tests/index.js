import { Selector, ClientFunction } from 'testcafe';
const getLocation = ClientFunction(() => document.location.href)


fixture('Test')
  .page('https://bolajiayodeji.com/');

  test('test_1', async (t) => {
    await t
        .click(Selector('#__next > div > header > div > div.flex.flex-row.flex-wrap.items-end.justify-between.text-base.uppercase.font-medium.text-white > div.scrollbar-container.overflow-hidden.flex-1.ps > nav > a:nth-child(4)'))
        .expect(getLocation()).match(/.*\/contact*/)
  });

  test.only('test_2', async (t) => {
    await t
        .click(Selector('#__next > div > header > div > div.flex.flex-row.flex-wrap.items-end.justify-between.text-base.uppercase.font-medium.text-white > div.scrollbar-container.overflow-hidden.flex-1.ps > nav > a:nth-child(2)'))
        .expect(getLocation()).contains('/bolajiayodeji.com/about')
  });

  test('test_3', async (t) => {
    await t
        .hover(Selector('#__next > div > header > div > div.flex.flex-row.flex-wrap.items-end.justify-between.text-base.uppercase.font-medium.text-white > div.scrollbar-container.overflow-hidden.flex-1.ps > nav > a:nth-child(3)'))
        .typeText('input[type="text"]', 'lorem@ipsum.com')
        .debug()
  });