<template>
  <div class="main-wrap surface1">
    <div class="tabset">
      <input
        type="radio"
        name="tabset"
        id="tab1"
        aria-controls="vision"
        checked
      />
      <label for="tab1">Vision</label>
      <input type="radio" name="tabset" id="tab2" aria-controls="mission" />
      <label for="tab2">Mission</label>
      <input type="radio" name="tabset" id="tab3" aria-controls="purpose" />
      <label for="tab3">Purpose</label>
      <input type="radio" name="tabset" id="tab4" aria-controls="focus" />
      <label for="tab4">Focus</label>
      <input
        type="radio"
        name="tabset"
        id="tab5"
        aria-controls="Coordination"
      />
      <label for="tab5">Coordination</label>
      <input type="radio" name="tabset" id="tab6" aria-controls="values" />
      <label for="tab6">Core Values</label>
      <div class="tab-panels">
        <section id="vision" class="vision tab-panel">
          <p>
            A society where, every individual’s right to life, protection,
            education, and participation assured.
          </p>
        </section>
        <section id="mission" class="mission tab-panel">
          <p>
            Harikar is a neutral non-governmental humanitarian organization,
            which believes that in every aspect of life priority must be given
            to children and women.
          </p>
          <p>
            It commits itself to ensure particular protection for the very
            disadvantaged children and women, such as children who are born with
            chronic/abnormal diseases, disabled children, children with extreme
            poverty, victims of war and widows as well as woman headed families.
          </p>
          <p>
            Harikar assists in upgrading of the health service and promotion of
            technical cooperation, and –within the available resources- to
            promote/develop the infrastructure of the basic services. It also
            looks forward to participate- within its resources- in the process
            of rebuilding of the new Iraq.
          </p>
          <p>
            In close coordination with the other specialized agencies, Harikar
            assists in the improvement of nutrition, recreation, economic and
            other aspects of environmental hygiene.
          </p>
          <p>
            Harikar believes that education is a fundamental right and works
            towards its promotion; in this aspect, it strives towards ensuring
            basic education for all children irrespective of gender, religion,
            race and ethnicities.
          </p>
          <p>
            Harikar works with all national and international organizations as
            well as government bodies towards the realization of the sustainable
            human development objectives and contributes towards the achievement
            of the vision of piece and social progress.
          </p>
        </section>
        <section id="purpose" class="purpose tab-panel">
          <p>
            Harikar NGO is founded with the purpose of developing, promoting and
            supporting civil society through offering an open space for all
            individuals living within Duhok governorate, Kurdistan Region and
            whole Iraq to be informed and participate in realizing her/his
            rights.
          </p>
        </section>
        <section id="focus" class="focus tab-panel">
          <p>
            Harikar NGO, pay special attention to human rights, as regards to
            equity between males and females, maternity, childhood, extreme
            poor/ disadvantaged and vulnerable children through organizing
            awareness courses on civil rights.
          </p>
        </section>
        <section id="Coordination" class="coordination tab-panel">
          <p>
            Harikar NGO works and coordinates with local Governmental
            Institutions, Civil Society Organizations, United Nation Agencies,
            International and local Non-Governmental Organizations.
          </p>
        </section>
        <section id="values" class="values tab-panel">
          <p>
            <strong>Humanity:</strong> We respect every human being regardless
            of his/her gender, ethnicity, religion, culture, believes and
            status.
          </p>
          <p>
            <strong>Integrety</strong> We ensure the highest standards of
            personal and organizational honesty, transparency and behavior.
          </p>
          <p>
            <strong>Accountability</strong> We are responsible for our
            decisions, actions and accountable to our partners, donors, staff
            and most of all, to our beneficiaries.
          </p>
          <p>
            <strong>Impartiality</strong> We take decisions and actions based on
            beneficiaries’ needs and avert from any political, commercial,
            ethical, religious and social interest.
          </p>
          <p>
            <strong>Trust</strong> We work to build the trust of the communities
            with which we work.
          </p>
          <p>
            <strong>Commitment</strong> We are committed to provide the best
            possible quality of services to our beneficiaries.
          </p>
        </section>
      </div>
    </div>
    <Tint flipped gray />
  </div>
</template>

<script setup>
import Tint from "../Shapes/Tint.vue";
</script>

<style scoped>
@import "./profile.css";
</style>
