---
title: Keep inventory in creative mode
---
Applies the keepInventory gamerule if it's disabled to all players that are in creative mode.

## Config options

| Option key                                  | Description                                                                                            | Type      | Default value                   | Possible values       |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------|-----------|---------------------------------|-----------------------|
| `creative_keep_inventory.enabled`           | Controls if module will be enabled                                                                     | `Boolean` | `false`                         | `true/false`          |
| `creative_keep_inventory.requirePermission` | Controls if a permission is required to keep the inventory                                             | `Boolean` | `false`                         | `true/false`          |
| `creative_keep_inventory.permission`        | Controls the permission that is required to keep the inventory. `requirePermission` has to be enabled. | `String`  | `ve.keep_inventory_in_creative` | any permission name |