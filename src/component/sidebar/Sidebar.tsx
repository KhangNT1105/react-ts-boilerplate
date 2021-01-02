import { Button } from '@material-ui/core';
import React from 'react';
import './Sidebar.scss';
import plusIcon from '../../assets/image/sidebar/plus.png'
import { useTranslation } from 'react-i18next';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';

const Sidebar: React.FC = () => {
    const { t } = useTranslation();
    const routes = [{
        text: t("INBOX"),
        Icon: <InboxIcon />,
        to: './'
    },]
    return <div className="sidebar">
        <div className="sidebar__compose">
            <Button startIcon={<img src={plusIcon} alt="plus" />} >
                {t("COMPOSE")}
            </Button>
        </div>
    </div>;
}

export default Sidebar;