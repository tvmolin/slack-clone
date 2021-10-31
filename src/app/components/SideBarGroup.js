import React from 'react'
import { useDispatch } from 'react-redux';
import { enterRoom } from '../../features/appSlice';

function SideBarGroup({ group }) {
  const dispatch = useDispatch();
  const selectChannel = () => {
    if (group?.id) {
      dispatch(enterRoom({ roomId: group.id }));
    }
  };

  return (
    <div onClick={selectChannel}>
      {group.name}
    </div>
  )
}

export default SideBarGroup
