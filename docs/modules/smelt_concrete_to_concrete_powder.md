---
title: Smelt concrete to concrete powder
---
Allows players to smelt concrete to concrete powder.
## Recipe:
![The Recipe](/img/smelt_concrete_to_concrete_powder.png)

## Config options

| Option key                        | Description                               | Type      | Default value | Possible values |
|-----------------------------------|-------------------------------------------|-----------|---------------|-----------------|
| `smelt_concrete_to_concrete_powder.enabled` | Controls if the recipes will be registered | `Boolean` | `false`       | `true/false`    |
| `smelt_concrete_to_concrete_powder.experience` | Controls the experience given by the recipes | `Float`   | `0`         | `>=0`           |
| `smelt_concrete_to_concrete_powder.cookingTime` | Controls the cooking time (in ticks) | `Integer`   | `200`         | `>0`           |

## More information

:::caution

Setting `experience` to a value other than 0 can lead to players farming experience,
since concrete powder can easily be converted to concrete.

:::