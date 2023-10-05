# Скрипт бриджит Goerli Eth в Arbitrum Goerli

Для запуска скрипта нужен Node.js, если ещё не установлен, устанавливаем с
https://nodejs.org/en

НЕ УСТАНАВЛИВАЙТЕ версию Current, ставьте версию LTS!

Запускаем терминал, переходим в терминале в папку scroll-alpha

Выполняем команды:

```
npm install
```

ждём когда установятся все зависимости если появились ошибки, пробуем команду

```
npm install --legacy-peer-deps
```

Далее необходимо добавить приватные ключи в файл keys.txt каждый ключ на новой
строке

## Принцип работы

1. Скрипт смотрит есть ли баланс в сети Arbitrum Goerli
2. Если баланс 0, то брижит eth из Goerli

## Настройки в файле constants.ts:

`export const MIN_BRIDGE_IN_ETH = 0.1` - сколько минимально бриджить
`export const MAX_BRIDGE_IN_ETH = 0.15` - сколько максимально бриджить

Выбирается случайное число между MIN_BRIDGE_IN_ETH и MAX_BRIDGE_IN_ETH

`export const DELAY_FROM_SEC = 100` - минимальное время ожидания в секундах
между кошельками

`export const DELAY_TO_SEC = 200` - максимальное время ожидания в секундах между
кошельками

Запуск

```
npm start
```

## Поблагодарить автора можно отправив донат в любой evm сети на:

```
raznorabochiy.eth
raznorabochiy.arb
raznorabochiy.bnb
0xE8eAbec7CE9e8Bf78A766E8556E542BC2C9446ae
```
