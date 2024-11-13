import React from 'react';
import './Sidebar.css';
import TitleComp from '../../UI/TitleComp';
import CardComp from '../../UI/CardComp';
import { Avatar, Typography } from '@mui/material';
import DvrTwoToneIcon from '@mui/icons-material/DvrTwoTone';
import BugReportIcon from '@mui/icons-material/BugReport';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SensorsIcon from '@mui/icons-material/Sensors';


function RightSidebar({ isDarkMode }) {
  const personImage = 'https://images.pexels.com/photos/1267690/pexels-photo-1267690.jpeg';
  const personImage1 = 'https://randomuser.me/api/portraits/men/75.jpg';
  const personImage2 = 'https://randomuser.me/api/portraits/women/65.jpg';
  const personImage3 = 'https://randomuser.me/api/portraits/men/32.jpg';
  const personImage4 = 'https://randomuser.me/api/portraits/women/89.jpg';
  const personImage5 = 'https://randomuser.me/api/portraits/men/46.jpg';
  return (
    <div className={`right-sidebar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <CardComp isDarkMode={isDarkMode}>
        <div style={{ marginLeft: 10 }}>
          <Typography style={{ fontFamily: 600, fontSize: 14 }}>Notifications</Typography>
          <div>
            <TitleComp
              style={{ padding: 0, marginBottom: 1, marginTop: 2 }}
              icon={<BugReportIcon style={{ backgroundColor: 'rgba(103, 177, 202, 0.1)', border: '0.1px solid lightgray', borderRadius: 7, marginBottom: 7, width: 20, height: 20 }} />}
              title="You have a bug that needs..."
              time={Date.now()}
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<AccountCircleIcon style={{ backgroundColor: 'rgba(76, 100, 108, 0.1)', border: '0.1px solid lightgray', borderRadius: 7, marginBottom: 7, width: 20, height: 20 }} />}
              title="New user registered"
              time={Date.now()}
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<BugReportIcon style={{ backgroundColor: 'rgba(103, 177, 202, 0.1)', border: '0.1px solid lightgray', borderRadius: 7, marginBottom: 7, width: 20, height: 20 }} />}
              title="You have a bug that needs..."
              time={Date.now()}
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<SensorsIcon style={{ backgroundColor: 'rgba(76, 100, 108, 0.1)', border: '0.1px solid lightgray', borderRadius: 7, marginBottom: 7, width: 20, height: 20 }} />}
              title="Andi lane subscribed to you"
              time={Date.now()}
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
          </div>
        </div>
        <div style={{ marginLeft: 10, marginTop: 20 }}>
          <Typography style={{ fontFamily: 600, fontSize: 14 }}>Activities</Typography>
          <div>
            <TitleComp
              style={{ padding: 0, marginBottom: 1, marginTop: 2 }}
              icon={
                <Avatar
                  src={personImage}
                  alt="Back of Head"
                  sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: '#f0f0f0',
                    marginBottom: 2,
                  }}
                />
              }
              title="You have a bug that needs..."
              time={Date.now()}
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<Avatar
                src={personImage1}
                alt="Back of Head"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#f0f0f0',
                  marginBottom: 2,
                }}
              />}
              title="Released a new version"
              time={Date.now()}
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<Avatar
                src={personImage2}
                alt="Back of Head"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#f0f0f0',
                  marginBottom: 2,
                }}
              />}
              title="Submited a bug"
              time={Date.now()}
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<Avatar
                src={personImage3}
                alt="Back of Head"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#f0f0f0',
                  marginBottom: 2,
                }}
              />}
              title="Modified A data in page X"
              time={Date.now()}
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<Avatar
                src={personImage4}
                alt="Back of Head"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#f0f0f0',
                  marginBottom: 2,
                }}
              />}
              title="Deleted a page in project X"
              time={Date.now()}
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
          </div>
        </div>
        <div style={{ marginLeft: 10, marginTop: 20 }}>
          <Typography style={{ fontFamily: 600, fontSize: 14 }}>Contacts</Typography>
          <div>
            <TitleComp
              style={{ padding: 0, marginBottom: 1, marginTop: 2 }}
              icon={<Avatar
                src={personImage5}
                alt="Back of Head"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#f0f0f0',
                }}
              />}
              title="Natali Craig"
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<Avatar
                src={personImage4}
                alt="Back of Head"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#f0f0f0',
                }}
              />}
              title="Drew Cano"
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<Avatar
                src={personImage3}
                alt="Back of Head"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#f0f0f0',
                }}
              />}
              title="Orlando Diggs"
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<Avatar
                src={personImage2}
                alt="Back of Head"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#f0f0f0',
                }}
              />}
              title="Andi Lane"
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<Avatar
                src={personImage1}
                alt="Back of Head"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#f0f0f0',
                }}
              />}
              title="Kate Morrison"
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
            <TitleComp
              style={{ padding: 0, marginBottom: 1 }}
              icon={<Avatar
                src={personImage4}
                alt="Back of Head"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#f0f0f0',
                }}
              />}
              title="Koray Okumus"
              titleStyle={{ fontFamily: 400, fontSize: 14 }}
            />
          </div>
        </div>
      </CardComp>
    </div>
  );
}

export default RightSidebar;
