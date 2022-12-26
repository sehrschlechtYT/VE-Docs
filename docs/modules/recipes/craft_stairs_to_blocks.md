---
title: Craft stairs to blocks
---
Allows players to craft stairs to blocks.
## Recipe:
![The Recipe](/img/craft_stairs_to_blocks.png)

## Config options

| Option key                                    | Description                                       | Type      | Default value | Possible values                                                                        |
|-----------------------------------------------|---------------------------------------------------|-----------|---------------|----------------------------------------------------------------------------------------|
| `craft_stairs_to_blocks.enabled`              | Controls if the recipes will be registered        | `Boolean` | `false`       | `true/false`                                                                           |
| `craft_stairs_to_blocks.excludedStairs`       | Exclude recipes for stairs from being registered  | `List`    | `[]`          | [List of materials](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) |
| `craft_stairs_to_blocks.requiredStairsAmount` | The required amount of stairs to craft the blocks | `Integer` | `4`           | `1`-`9`                                                                                |
| `craft_stairs_to_blocks.blockAmount`          | The amount of blocks that players will receive    | `Integer` | `3`           | `1`-`64`                                                                                 |