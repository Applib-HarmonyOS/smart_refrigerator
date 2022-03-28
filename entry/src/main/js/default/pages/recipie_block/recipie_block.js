export default {
    data: {
        //      I M A G E S
        bg: "/common/images/bg.png",
        recepie_bg: "/common/images/recepie_bg.png",
        favourite_active: '/common/images/favourite_active.png',
        favourite_inactive: '/common/images/favourite_inactive.png',
        clock: '/common/images/clock.png',
    },
    props:{
        user_reaction:"",
        favourite_icon:"",
        recp_name: '',
        recp_type: '',
        time_recp: '',
        recp_image: '',

    },
    onInit() {
        if(this.user_reaction == "true"){
            this.favourite_icon=this.favourite_active;
        }
        else if (this.user_reaction == "false"){
            this.favourite_icon=this.favourite_inactive;
        }
    },
    user_reaction_listner: function(){
        if(this.user_reaction == "true"){
            this.user_reaction = "false";
            this.favourite_icon=this.favourite_inactive;
        }
        else if(this.user_reaction == "false"){
            this.user_reaction = "true";
            this.favourite_icon=this.favourite_active;
        }
    }


}
