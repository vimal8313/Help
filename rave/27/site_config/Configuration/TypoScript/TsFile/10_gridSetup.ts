# ------------------------------------------------
# Assing grids, config grid header usage
#

# Don't show header
tt_content.gridelements_pi1.10 >

# Change if gridelements have diffferent IDs.
/*
tt_content.gridelements_pi1.20.10.setup {
    10 < lib.bootstrap_grids.GridForKontact
    11 < lib.bootstrap_grids.3cols
    12 < lib.bootstrap_grids.4cols
}
*/

tt_content.gridelements_pi1.20.10 {
    setup {
        # Two Column Images with text
        1{
            wrap = <div class="container"><div class="inner_profeature"><div class="row_ftur">|</div></div></div>
            columns {
                0 {
                    renderObj =< tt_content
                    wrap =  <div class="leftbar_ftur"><div class="inner_ftur">|</div></div>
                }
                1 {
                    renderObj =< tt_content
                    wrap =   <div class="rightbar_ftur"><div class="inner_ftur">|</div></div>
                }
            }
        }
        2{
            wrap = <section id="fes_map"><div class="container"><div class="inner_festmap">|</div></div></section>
            columns {
                0 {
                    renderObj =< tt_content
                    wrap =  <div class="map_box">|</div>
                }
                1 {
                    renderObj =< tt_content
                    wrap =   <div class="map_text">|</div>
                }
            }
        }
        3{
            wrap = <section id="press_form"><div class="container"><div class="inner_pressform"><div class="main_pressform">|</div></div></div></section>
            columns {
                0 {
                    renderObj =< tt_content
                    wrap =  |
                }
                1 {
                    renderObj =< tt_content
                    wrap =   |
                }
            }
        }
        4{
            wrap = <section id="logosphoto"><div class="container"><div class="inner_logosphoto">|</div></div></section>
            columns {
                0 {
                    renderObj =< tt_content
                    wrap =  <div class="cnt_logophoto">|</div>
                }
                1 {
                    renderObj =< tt_content
                    wrap =   <div class="logo_list">|</div>
                }
            }
        }
        5{
            #wrap = |
            columns {
                0 {
                    renderObj =< tt_content
                    wrap =  |
                }
                1 {
                    renderObj =< tt_content
                    wrap =   |
                }
            }
        }
        7{
            #wrap = |
            columns {
                0 {
                    renderObj =< tt_content
                    dataWrap =  <section id="{field:flexform_year}" class="section_year"><div class="container container_new"><div class="inner_banner"><div class="main_pitch"><div class="pitch_date">{field:flexform_date}</div><h1>{field:flexform_year}</h1><p>{field:flexform_description}</p></div></div>|</div></section>
                }
            }
        }
    }
}
