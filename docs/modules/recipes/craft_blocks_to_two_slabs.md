---
title: Craft blocks to two slabs
---
Allows players to craft two slabs from one block.
## Recipe:
![The Recipe](/img/craft_blocks_to_two_slabs.png)

## Config options

| Option key                        | Description                               | Type      | Default value | Possible values |
|-----------------------------------|-------------------------------------------|-----------|---------------|-----------------|
| `craft_blocks_to_two_slabs.enabled` | Controls if the recipes will be registered | `Boolean` | `false`       | `true/false`    |
| `craft_blocks_to_two_slabs.excludedBlocks` | Exclude recipes for blocks from being registered | `List` | `[OAK_PLANKS, SPRUCE_PLANKS, BIRCH_PLANKS, JUNGLE_PLANKS, ACACIA_PLANKS, DARK_OAK_PLANKS, MANGROVE_PLANKS, CRIMSON_PLANKS, WARPED_PLANKS, POLISHED_BLACKSTONE]` | [List of materials](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)

## More information

:::info

The default `excludedBlocks` prevent button crafting recipes from being overriden.  

:::