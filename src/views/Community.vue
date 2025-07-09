<template>
  <DefaultLayout>
    <div class="bg-bgdark text-white font-techno min-h-screen px-4 md:px-20 py-12 space-y-12">
      <!-- Other Clubs -->
      <section>
        <h2 class="text-3xl text-primary font-bold mb-6">Other Clubs in College</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TeamCard name="Robotics Club" image="/clubs/robotics.png" />
          <TeamCard name="Coding Club" image="/clubs/coding.png" />
          <!-- Add more clubs here -->
        </div>
      </section>

      <!-- Internal Teams -->
      <section>
        <h2 class="text-3xl text-primary font-bold mb-6">Internal Teams</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TeamCard name="Design Team" image="/teams/design.png" />
          <TeamCard name="Web Team" image="/teams/web.png" />
          <!-- Add more teams here -->
        </div>
      </section>

      <!-- Core Team -->
      <section>
        <h2 class="text-3xl text-primary font-bold mb-6">Core Team Members</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MemberCard
            name="John Doe"
            role="President"
            photo="/members/john.jpg"
            linkedin="https://linkedin.com/in/johndoe"
          />
          <MemberCard
            name="Jane Smith"
            role="Vice President"
            photo="/members/jane.jpg"
            linkedin="https://linkedin.com/in/janesmith"
          />
          <!-- Add more members here -->
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import TeamCard from '../components/ui/TeamCard.vue'
import MemberCard from '../components/ui/MemberCard.vue'
</script>
