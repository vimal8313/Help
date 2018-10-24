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
            wrap = <section id="sec" class="section-xs-bottom-40 section-sm-bottom-60 section-md-bottom-110 section-lg-bottom-110"><div class="shell"><div class="range range-xs-center">|</div></div></section>
            columns {
                1 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6 cell-lg-4">|</div>
                }
                2 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6 cell-lg-4 offset-top-64 offset-sm-top-0">|</div>
                }
            }
        }
        2{
            wrap = <section id="sec" class="section-xs-bottom-40 section-sm-bottom-60 section-md-bottom-110 section-lg-bottom-110"><div class="shell"><div class="range range-xs-center">|</div></div></section>
            columns {
                1 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6">|</div>
                }
                2 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6">|</div>
                }
            }
        }
        3{
            wrap = <section id="sec" class="section-xs-40 section-sm-60 section-md-110 section-lg-110"><div class="shell">|</div></section>
            columns {
                1 {
                    renderObj =< tt_content
                }
            }
        }
        4{
            wrap = <div class="range range-xs-center"><div class="cell-sm-10 cell-lg-10">|</div></div>
            columns {
                1 {
                    renderObj =< tt_content
                }
            }
        }
        5{
            wrap = <div class="range range-xs-center offset-top-25 offset-md-top-44 text-left">|</div>
            columns {
                1 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6">|</div>
                }
                2 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6 offset-top-25 offset-sm-top-0">|</div>
                }
            }
        }
        6{
            wrap = <div class="range range-xs-center text-sm-left offset-top-55">|</div>
            columns {
                0 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6">|</div>
                }
                1 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6 offset-top-30 offset-sm-top-0">|</div>
                }
            }
        }
        7{
            wrap = <section id="sec" class="section-xs-bottom-40 section-sm-bottom-60 section-md-bottom-110 section-lg-bottom-110"><div class="shell section-aside-xl"><div class="range range-xs-center">|</div></div></section>
            columns {
                1 {
                    renderObj =< tt_content
                    wrap = <div class="cell-sm-10 cell-lg-8">|</div>
                }
            }
        }
        8{
            wrap = <section id="sec" class="section-xs-bottom-40 section-sm-bottom-60 section-md-bottom-110 section-lg-bottom-110"><div class="shell">|</div></section>
            columns {
                1 {
                    renderObj =< tt_content
                }
            }
        }
        9{
            wrap = <section id="sec" class="section-xs-bottom-40 section-sm-bottom-60 section-md-bottom-110 section-lg-bottom-110"><div class="shell section-aside-xl"><div class="range range-xs-center">|</div></div></section>
            columns {
                1 {
                    renderObj =< tt_content
                    wrap = <div class="cell-md-10">|</div>
                }
            }
        }
        10{
            wrap = <div class="range range-xs-center text-left offset-top-30">|</div>
            columns {
                0 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6">|</div>
                }
                1 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6 offset-top-44 offset-sm-top-0">|</div>
                }
            }
        }
        11{
            wrap = <section id="sec" class="section-xs-bottom-40 section-sm-bottom-60 section-md-bottom-110 section-lg-bottom-110">|</section>
            columns {
                0 {
                    renderObj =< tt_content
                    wrap =  <div class="shell">|</div>
                }
                1 {
                    renderObj =< tt_content
                    wrap =  <div class="offset-top-30 offset-md-top-60">|</div>
                }
            }
        }
        12{
            wrap = <div class="range range-xs-center text-left offset-top-30"><div class="range range-xs-center text-left">|</div></div>
            columns {
                0 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6 cell-sm-push-1">|</div>
                }
                1 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6 offset-top-44 offset-sm-top-0">|</div>
                }
            }
        }
        13{
            wrap = <div class="range range-xs-center"><div class="cell-sm-12">|</div></div>
            columns {
                1 {
                    renderObj =< tt_content
                }
            }
        }
        14{
            wrap = <section><div class="shell section-aside-xl"><div class="range range-xs-center offset-top-30 offset-xl-top-0"><div class="cell-sm-10 cell-lg-8">|</div></div></div></section>
            columns {
                1 {
                    renderObj =< tt_content
                }
            }
        }
        15{
            wrap = <section id="sec" class="section-xs-bottom-40 section-sm-bottom-60 section-md-bottom-110 section-lg-bottom-110 context-dark">|</section>
            columns {
                1 {
                    renderObj =< tt_content
                }
            }
        }
        16{
           wrap = <div class="range range-xs-center text-left">|</div>
            columns {
                1 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6 cell-lg-5">|</div>
                }
                2 {
                    renderObj =< tt_content
                    wrap =  <div class="cell-sm-6 cell-lg-5 offset-top-30 offset-sm-top-0">|</div>
                }
            }
        }
        17{
            wrap = <section id="sec" class="section-xs-bottom-40 section-sm-bottom-60 section-md-bottom-110 section-lg-bottom-110">|</section>
            columns {
                1 {
                    renderObj =< tt_content
                }
            }
        }
    }
}
