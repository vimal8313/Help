tt_content.gridelements_pi1.20.10.setup {
  # NewsDetail 2Column
  1 <  lib.gridelements.defaultGridSetup
  1.wrap = <section class="news-post"><div class="container"><div class="row">|</div></div></section>
  1 {
    columns {
      1 < .default
      1.wrap = <div class="col-sm-9 news-leftcol">|</div>

      2 < .default
      2.wrap =  <div class="col-sm-3 news-rightcol"><div class="rightcol">|</div></div>
    }
  }

  # News 2Column
  2 <  lib.gridelements.defaultGridSetup
  2.wrap = <section class="news-col"><div class="container"><div class="row">|</div></div></section>
  2 {
    columns {
      1 < .default
      1.wrap = <div class="col-sm-9 news-leftcol">|</div>

      2 < .default
      2.wrap =  <div class="col-sm-3 news-rightcol"><div class="rightcol">|</div></div>
    }
  }

  # Contact Container
  3 <  lib.gridelements.defaultGridSetup
  3 {
    columns {
      1 < .default
      1.wrap = <section class="spacing contact-col"><div class="small-container">|</div></section>
    }
  }

  # Contact TimingBlock
  4 <  lib.gridelements.defaultGridSetup
  4.wrap = <div class="timing-row">|</div>
  4 {
    columns {
      1 < .default
      1.wrap = <div class="col-left">|</div>

      2 < .default
      2.wrap = <div class="col-right">|</div>
    }
  }

  #Impressum Container
  5 <  lib.gridelements.defaultGridSetup
  5 {
    columns {
      1 < .default
      1.wrap = <section class="spacing content-col impressum-content"><div class="small-container">|</div></section>
    }
  }

  #Accordian GalleryContainer
  6 <  lib.gridelements.defaultGridSetup
  6 {
    columns {
      1 < .default
      1.wrap = <ul class="gallery">|</ul>
    }
  }

  #Accordian WaitingContainer
  7 <  lib.gridelements.defaultGridSetup
  7 {
    columns {
      1 < .default
      1.wrap =  <div class="emer-col">|</div>
    }
  }

  #Settlement SliderContainer
  8 <  lib.gridelements.defaultGridSetup
  8 {
    columns {
      1 < .default
      1.wrap =  <section class="pictures-slider"><div class="container"><div class="slider image-slider">|</div></div></section>
    }
  }

  #Settlement EnergyBlock
  9 <  lib.gridelements.defaultGridSetup
  9.wrap = <section class="energy-row"><div class="container"><div class="row">|</div></div></section>
  9 {
    columns {
      1 < .default
      1.wrap =  <div class="col-sm-7 left-col"><div class="left-content">|</div></div>

      2 < .default
      2.wrap =  <div class="col-sm-5 right-col"><div class="right-image">|</div></div>
    }
  }

  # About Awards2Column
  10 <  lib.gridelements.defaultGridSetup
  10.wrap = <div class="row">|</div>
  10 {
    columns {
      1 < .default
      1.wrap = <div class="col-sm-7 col-left"><div class="content-col">|</div></div>

      2 < .default
      2.wrap = <div class="col-sm-5 col-right"><div class="image-col">|</div></div>
    }
  }

  # Accordion
  accordion  < lib.gridelements.defaultGridSetup
  accordion {
    # wrap around all
    outerWrap.stdWrap.cObject = CASE
    outerWrap.stdWrap.cObject {
      key.field = flexform_rowclass
      default = TEXT
      default.value = <div class="accordion"><div class="panel-group" id="accordion">|</div></div>
    }
    outerWrap.insertData = 1

    columns {
      101 < .default
      101 {
        renderObj {
          stdWrap.outerWrap = <div class="panel">|</div>

          # thanks to Josef Körner (brandical.de) for simplification
          5 = LOAD_REGISTER
          5 {
            AccordionCount.cObject = TEXT
            AccordionCount.cObject.data = register:AccordionCount
            AccordionCount.cObject.wrap = |+1
            AccordionCount.prioriCalc = intval
          }
          10 = TEXT
          10 {
            field = header
            insertData = 1
            wrap          =  <div class="panel-heading"><a href="javascript:void(0)" class="panel-title">|</a></div><div class="panel-body">

            wrap.override = <div class="panel-heading"><a href="javascript:void(0)" class="panel-title">|</a></div><div class="panel-body">
            wrap.override.if.value = 1
            wrap.override.if.equals.data = register:AccordionCount
          }
          # don't show headers in accordion
          #20 =< tt_content
          20 < tt_content
          20 {
            text.10 >
            image.10 >
            textpic.10 >
            uploads.10 >
            table.10 >
            multimedia.10 >
            media.10 >
            mailform.10 >
            menu.10 >
            videoce_videocontent.10 >
          }
          30 = TEXT
          30.wrap = |</div>
        }
      }
    }
  }

}

