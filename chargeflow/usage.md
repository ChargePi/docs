---
sidebar_position: 2
---

# Usage

You can use ChargeFlow to validate OCPP messages by running the following command:

```bash
chargeflow validate '[2, "123456", "BootNotification", {"chargePointVendor": "TestVendor", "chargePointModel": "TestModel"}]'
```

For more options, you can run:

```bash
chargeflow validate

Validate the OCPP message(s) against the registered OCPP schema(s).

Usage:
  chargeflow validate [flags]

Examples:
chargeflow --version 1.6 validate '[2, "123456", "BootNotification", {"chargePointVendor": "TestVendor", "chargePointModel": "TestModel"}]'

Flags:
  -h, --help             help for validate
  -a, --schemas string   Path to additional OCPP schemas folder

Global Flags:
  -d, --debug            Enable debug mode
  -v, --version string   OCPP version to use (1.6 or 2.0.1) (default "1.6")
```

## Request and Response Messages

ChargeFlow will automatically determine whether it's a request or response message. All you need to provide is a OCPP
version!

## Custom Schemas

Additionally, you can specify a custom path to vendor-specific OCPP schemas using the `--schemas` flag. This allows you
to validate messages against custom schemas that are not included in the official OCPP specification.