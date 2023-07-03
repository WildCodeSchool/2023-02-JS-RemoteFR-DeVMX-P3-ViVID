import { useState } from "react";

import "./Admin.scss";
import AddVideos from "../components/Admin/AddVideos";
import HomeSetting from "../components/Admin/HomeSetting";
import SkyCloudSetting from "../components/Admin/SkyCloudSetting";
import MountainSetting from "../components/Admin/MountainSetting";
import ForestSetting from "../components/Admin/ForestSetting";
import SeaOceanSetting from "../components/Admin/SeaOceanSetting";
import UrbanSetting from "../components/Admin/UrbanSetting";
import FieldSetting from "../components/Admin/FieldSetting";

export default function Admin() {
  const [tab, setTab] = useState(1);

  return (
    <div className="admin">
      <ul>
        <li>
          <button type="button" onClick={() => setTab(1)}>
            Ajouter une vidéo
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setTab(2)}>
            Accueil
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setTab(3)}>
            Ciel & Nuages
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setTab(4)}>
            Montagnes
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setTab(5)}>
            Forêts
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setTab(6)}>
            Mer & Océans
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setTab(7)}>
            Urbain
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setTab(8)}>
            Champ
          </button>
        </li>
      </ul>
      <AddVideos tab={tab} />
      <HomeSetting tab={tab} />
      <SkyCloudSetting tab={tab} />
      <MountainSetting tab={tab} />
      <ForestSetting tab={tab} />
      <SeaOceanSetting tab={tab} />
      <UrbanSetting tab={tab} />
      <FieldSetting tab={tab} />
    </div>
  );
}
