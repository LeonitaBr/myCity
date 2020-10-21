import React from "react";
import { Header } from "components";

const headerConfig = {
    default: {
        headerShown: false
    },
    tabNavigator:{
        header: props => <Header {...props} menu={true} title={props.scene.route.name} />
    },
    generalHeader: {
        header: props => <Header {...props} title={props.scene.route.name} />
    },
    detailsHeader: {
        header: props => <Header {...props} title={props.scene.route.params.title} />
    }


}

export default headerConfig