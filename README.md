# Monorepo: OHIF-Fork & Pathology-DICOM Viewer

This repository is meant to demonstrate how the OHIF tools can be integrated into an Expo/React Native App and contains two independent projects:

- **[OHIF-Fork](https://github.com/OHIF/Viewers)**: A fork of the OHIF medical imaging platform.
- **Pathology-DICOM Viewer**: A DICOM viewer for pathology images (Expo/React Native app).

Both projects are managed independently within this monorepo. Follow the instructions below to get started with each.

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) (for containerized builds and deployments)
- (For Pathology-DICOM) [Expo CLI](https://docs.expo.dev/get-started/installation/):
  ```
  npm install -g expo-cli
  ```

---

## Getting Started

### 1. Clone the Repository
```sh
git clone <repo-url>
cd <repo-folder>
```

### 2. Install Dependencies for Each Project

#### OHIF-Fork
```sh
cd OHIF-Fork
npm install
npm audit fix
```

(If npm install doesn't work, use *npm install --legacy-peer-deps*)

#### Pathology-DICOM Viewer
```sh
cd ../pathology-DICOM
npm install
```

---

## Running Each Project

### OHIF-Fork

- **Development mode:**
  ```sh
  cd OHIF-Fork
  npm run dev
  ```
- **Build:**
  ```sh
  npm run build
  ```

> See `OHIF-Fork/README.md` for more details and advanced usage.

---

### Pathology-DICOM Viewer

- **Start the Expo app:**
  ```sh
  cd pathology-DICOM
  npx expo start -c
  ```
- Add you IPv4 address to the pathology-DICOM app (plcaeholder will be there)
- Follow the Expo CLI instructions to run on a device, emulator, or web.

> See `pathology-DICOM/README.md` for more details and advanced usage.

---

## Notes
- Each project manages its own dependencies and scripts. Always run commands inside the respective project folder.
- No dependencies are shared at the monorepo root.
- For troubleshooting or advanced configuration, refer to each project's own README.

---

## License
See individual project folders for license details.
