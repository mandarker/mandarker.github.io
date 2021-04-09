import watervid from './previewVideos/water.mp4';
import pikachuvid from './previewVideos/pikachu.mp4';
import voidblockvid from './previewVideos/voidblock.mp4';
import arrowshotvid from './previewVideos/arrowshot.mp4';
import shieldvid from './previewVideos/shield.mp4';
import synthwavevid from './previewVideos/synthwave.mp4';
import colormancy1 from './previewVideos/colormancy1.mp4';

const previews = [
  { id: 1, vidsrc: colormancy1, page: 'Colormancy1', title: 'Colormancy VFX Part 1', date: 'April 8, 2021', description: 'Making VFX for a spell-casting painting game.'},
  { id: 2, vidsrc: synthwavevid, page:'Synthwave', title: 'Synthwave Scene', date: 'July 25, 2020', description: 'Expanding into more custom post-processing effects.'},
  { id: 3, vidsrc: shieldvid, page:'Shield', title: 'Shield Shader', date: 'July 17, 2020', description: 'The first foray into post-processing and GrabPasses.'},
  { id: 4, vidsrc: watervid, page: 'Water', title: 'Water Shader', date: 'June 29, 2020', description: 'Basic water shader based on a heightmap.'},
  { id: 5, vidsrc: pikachuvid, page:'Pikachu', title: 'Pokemon Mystery Dungeon Shader', date: 'March 16, 2020', description: 'Remaking the visual style of Pokemon Mystery Dungeon DX.'},
  { id: 6, vidsrc: arrowshotvid, page: 'Arrow Shot', title: 'Arrow Shot Scene', date: 'December 2, 2019', description: 'Learning how to animate and incorporate shaders into a scene.'},
  { id: 7, vidsrc: voidblockvid, page: 'Void Block', title: 'Void Block Shader', date: 'June 20, 2019', description: 'Shader that came about the initial learning process.'}
];

export default previews;
