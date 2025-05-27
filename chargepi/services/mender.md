---
sidebar_position: 1
---

# Charging station with Mender

We will use [Mender](https://mender.io/) as OTA service for updating Linux, Docker and the client.

1. Sign up on Mender. If you want, host a Mender server yourself.
2. Follow this guide
   for [installing Mender on the Pi](https://docs.mender.io/get-started/preparation/prepare-a-raspberry-pi-device).
3. Add the Raspberry to the Devices list and test if Mender works.
4. If you do not wish to automatically update the OCPP client, change this label to false in **docker-compose.yaml**:

   ```yaml
      #Not recommended when using Mender, since you can update the images with Mender.
      chargepi:
        label:
          - com.centurylinklabs.watchtower.enable="false"
          #...
   ```

5. Run docker-compose:

   ```bash
   docker-compose up -d
   ```

   Optionally, you can run only the client service:

     ```bash
     docker-compose up -d chargepi
     ```
