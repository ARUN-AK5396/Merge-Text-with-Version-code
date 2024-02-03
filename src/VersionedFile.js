import FileVersion from './FileVersion';

class VersionedFile {
  constructor(baseContent) {
    this.baseVersion = new FileVersion(baseContent, 1);
    this.deltas = [];
  }

  addDelta(deltaContent) {
    const newVersionNumber = this.baseVersion.versionNumber + this.deltas.length + 1;
    const delta = new FileVersion(deltaContent, newVersionNumber);
    this.deltas.push(delta);
  }

  generateVersion(versionNumber) {
    if (versionNumber === 1) {
      return this.baseVersion.content;
    }

    const baseContent = this.baseVersion.content;
    let currentContent = baseContent;

    for (let i = 0; i < versionNumber - 1; i++) {
      if (this.deltas[i]) {
        currentContent += this.deltas[i].content;
      }
    }

    return currentContent;
  }
}

export default VersionedFile;
