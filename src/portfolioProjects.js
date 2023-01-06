// videos for portfolio
import nijitoVideo from './videos/homeVideos/NijitoShort.mp4'
import colormancyVideo from './videos/homeVideos/ColormancyShort.mp4'
import metatopeVideo from './videos/homeVideos/MetatopeShort.mp4'
import zoologistVideo from './videos/homeVideos/ZoologistShort.mp4'
import iaidoVideo from './videos/homeVideos/IAIDOShort.mp4'

// game links
import nijitoGame from './gameBuilds/NijitoDemoBuild.zip'
import colormancyGame from './gameBuilds/ColormancyDemoBuild.zip'
import iaidoGame from './gameBuilds/IAIDOBuild.zip'

const portfolioProjects = [
    { id: 1, title: 'Nijito', vidsrc: nijitoVideo, 
    desc: "A rhythm game where you can switch between several rhythm gamemodes in the middle of a song for higher scores.", 
    download: nijitoGame,
    link: "",
    blog: ""},
    { id: 2, title: 'Colormancy', vidsrc: colormancyVideo, 
    desc: "An online multiplayer dungeon crawler where you combine and cast different spells to paint the environment.", 
    download: colormancyGame,
    link: "",
    blog: ""},
    { id: 3, title: 'Metatope', vidsrc: metatopeVideo,
    desc: "An AR social media app using a single camera to perform full body tracking.", 
    download: "",
    link: "https://www.metatope.com/",
    blog: ""},
    { id: 4, title: 'IAIDO', vidsrc: iaidoVideo,
    desc: "An RPS game made during a game jam to utilize Unreal Engine's graphics pipeline.", 
    download: iaidoGame,
    link: "",
    blog: ""},
    { id: 5, title: 'Space Zoologist', vidsrc: zoologistVideo,
    desc: "An educational simulation game designed to instruct incoming biomedical students.",
    download: "",
    link: "https://louielab.org/SpaceZoologist/",
    blog: ""},
  ];

export default portfolioProjects;