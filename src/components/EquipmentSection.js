import React from 'react';
import '../styles/EquipmentSection.css'; // Assuming you have a CSS file for styling
import flowmaxLogo from '../assets/fm_logo1.png';

// Custom icons
import TankIcon from '../assets/Icons/tank.png';
import PipeIcon from '../assets/Icons/pipe.png';
import BlockedPipeIcon from '../assets/Icons/bar-chart.png';
import PumpIcon from '../assets/Icons/pump.png';
import ValveIcon from '../assets/Icons/valve.png';
import HeatExchangerIcon from '../assets/Icons/heat-exchanger.png';
import NozzleIcon from '../assets/Icons/nozzle.png';
import PressureDropIcon from '../assets/Icons/pressure.png';

const equipmentList = [
  { label: 'Tanks', icon: TankIcon },
  { label: 'Pipes & Fittings', icon: PipeIcon },
  { label: 'Surge Control', icon: BlockedPipeIcon },
  { label: 'Pumps on Sizing and Rating Mode', icon: PumpIcon },
  { label: 'Control Valves on Sizing and Rating Mode', icon: ValveIcon },
  { label: 'Heat Exchangers', icon: HeatExchangerIcon },
  { label: 'Spray Nozzles and Orifice Plate', icon: NozzleIcon },
  { label: 'General Pressure Drop', icon: PressureDropIcon },
];

const EquipmentSection = () => {
  return (
    <section className="equipment-compact-section">
      <h2 className="equipment-compact-title">
        EQUIPMENTS CAN BE MODELED USING{' '}
        <img src={flowmaxLogo} alt="Flowmax Logo" className="flowmax-inline-logo" />
      </h2>
      <div className="equipment-compact-grid">
        {equipmentList.map((item, index) => (
          <div key={index} className="equipment-card">
            <img src={item.icon} alt={item.label} className="equipment-icon" />
            <span className="equipment-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipmentSection;
