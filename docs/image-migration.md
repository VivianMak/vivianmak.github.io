# Image migration from Adobe Portfolio
Images pulled from the live Adobe Portfolio site (`vmak.myportfolio.com`) into this repo, organized into an `images/` folder under each project page. Migrated 2026-07-21.
For each source image, the **full-resolution original** was downloaded where Adobe exposed one; otherwise the largest available variant. Files are numbered in the order they appear on the page (image `01` is the page hero / card cover).

## Downloaded per project

### CREST Lab (/crest-lab)
→ `projects/crest/images/`

| Local file | Role | Source (Adobe CDN) |
|---|---|---|
| `crest_01.png` | hero / cover | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/853ab257-2bc3-4e23-bbe6-dbfbf0c19e96_rwc_0x0x671x479x671.png` |
| `crest_02.jpg` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/ac4c4b1e-0089-4a22-bbfc-2583bfb321cd.jpg` |
| `crest_03.png` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/da064ca9-86b3-4c9f-87bd-4999be21b85d.png` |

### Fleet Robotics (/fleet-robotics)
→ `projects/fleet_robotics/images/`

| Local file | Role | Source (Adobe CDN) |
|---|---|---|
| `fleet_robotics_01.png` | hero / cover | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/b330acce-9341-4e0f-9798-09e0a3794a82_rwc_611x0x1639x1170x1920.PNG` |
| `fleet_robotics_02.jpg` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/4978f7c4-6817-4cd1-b5cb-ba74de2d78e6.jpg` |
| `fleet_robotics_03.png` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/6133e038-23c5-46e2-adb5-98c77dd3f996.png` |
| `fleet_robotics_04.png` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/4f7e5a55-3789-479a-b101-639248cff309_rw_1200.png` |
| `fleet_robotics_05.png` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/29d33d01-3229-464a-b336-0db6c26e7bd9_rw_600.png` |

### Pose Graph Optimization (/pose-graph-optimizaton)
→ `projects/pose_graph/images/`

| Local file | Role | Source (Adobe CDN) |
|---|---|---|
| `pose_graph_01.jpg` | hero / cover | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/907422b1-6dab-494a-a46a-503ceac6ad13_rwc_0x86x612x436x612.jpg` |

### Robot Localization (/robot-localization)
→ `projects/localization/images/`

| Local file | Role | Source (Adobe CDN) |
|---|---|---|
| `localization_01.jpg` | hero / cover | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/42bf10f7-0e80-4f7a-a369-f53d9d64c558_car_4x3.jpg` |
| `localization_02.gif` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/896dedfd-0320-4fea-8aa3-feac6099d5ad.gif` |
| `localization_03.png` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/cd1dec5a-fa9b-43cf-b88e-4a0bc191c190.png` |

### Autonomous Vehicle Navigation (/visual-perception-for-autonomous-vehicles)
→ `projects/autonomous_vehicles/images/`

| Local file | Role | Source (Adobe CDN) |
|---|---|---|
| `autonomous_vehicles_01.jpg` | hero / cover | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/59cf0b97-d597-4144-a847-e0baf1191357_car_4x3.jpg` |
| `autonomous_vehicles_02.png` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/9bef8115-3700-4f8f-86eb-6cf88f61e786.png` |
| `autonomous_vehicles_03.png` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/c479ab01-01aa-4a4e-983f-69752191796e.png` |

### Other Engineering (/other-engineering)
→ `projects/other_engineering/images/`

| Local file | Role | Source (Adobe CDN) |
|---|---|---|
| `other_engineering_01.png` | hero / cover | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/9f01ef94-1ba0-476e-897d-21a6cde8babe_rwc_111x77x628x448x640.png` |
| `other_engineering_02.png` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/4ae660ce-ae15-422c-9ca6-135f63420e5d.png` |
| `other_engineering_03.png` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/304f7ec8-dc0c-48f0-8ade-2bada6618503.png` |
| `other_engineering_04.jpg` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/4741ef74-3e9c-4f06-8caf-aa0ba34ff661.JPG` |
| `other_engineering_05.jpg` | content | `https://cdn.myportfolio.com/598e5f73-3ddf-4a89-b53f-574741050801/ded3cde3-a5d0-41f7-b537-078714f7ecc4.jpg` |

## Homepage covers (copied into `assets/`)

The homepage (`index.html`) referenced four cover files that did not exist. Each project's hero image was copied into `assets/` and the `index.html` reference updated:

| Cover file | Copied from |
|---|---|
| `assets/crest.png` | `projects/crest/images/crest_01.png` |
| `assets/fleet_robotics.png` | `projects/fleet_robotics/images/fleet_robotics_01.png` |
| `assets/pose_graph.jpg` | `projects/pose_graph/images/pose_graph_01.jpg` |
| `assets/localization.jpg` | `projects/localization/images/localization_01.jpg` |

## Reorganized (already in the repo, no re-download)

- **Formula / Olin Electric Motorsports** — its 13 curated images were moved from `projects/formula/` into `projects/formula/images/` and the paths in `formula.html` + `index.html` updated.
- **3D Gaussian Splatting** — `g_cover.png` moved into `projects/gaussian/images/` and the `index.html` reference updated. The Adobe page has only this cover plus a YouTube demo (no content images).

## Notes

- **Pose Graph Optimization** is a *"work in progress"* page on Adobe — only a cover image exists; no content images.
- **Autonomous Vehicle Navigation** and **Other Engineering** do not yet have HTML pages in this repo. Their images are staged in `projects/autonomous_vehicles/images/` and `projects/other_engineering/images/` for when you build those pages.
- The Adobe **About** and **Hobbies** pages were out of scope and not migrated.
