const express = require('express');
const app = express();
app.get('/', (_, res) => res.send('✅ Bot is alive!'));
app.listen(process.env.PORT || 10000);

const mineflayer = require('mineflayer');

function startBot(name) {
  const bot = mineflayer.createBot({
    host: 'UNDERWORLDSMP_S1.aternos.me',
    port: 17727,
    username: name,
  });

  bot.on('spawn', () => console.log(`${name} joined the SMP!`));
  bot.on('end', () => setTimeout(() => startBot(name), 10000));
}

['HawkRider', 'BlazeCrafter', 'StoneRoot', 'PixelNomad', 'LeafStorm'].forEach((n, i) =>
  setTimeout(() => startBot(n), i * 8000)
);
