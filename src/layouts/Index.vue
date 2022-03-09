<template>
    <q-layout view="hHh lpR fFf" class="tw-font-poppins tw-overflow-x-hidden">
        <q-dialog v-model="SpecialInvited" persistent>
            <q-card class="tw-w-96 tw-text-center tw-font-poppins">
                <img src="img/SpecialInvited.png">
                <div class="tw-absolute tw-w-full tw-top-1/2 tw-left-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2">
                    <div class="tw-text-sm">Kepada Yth.</div>
                    <div class="tw-text-2xl tw-font-medium tw-py-2">{{ PersonInvited }}</div>
                    <div class="tw-text-sm">Ditempat</div>
                    <q-btn dense unelevated no-caps class="tw-bg-gray-700 tw-text-white tw-text-sm tw-font-light tw-px-5 tw-py-2 tw-mt-5" @click="playMusic">Buka Undangan</q-btn>
                </div>
            </q-card>
        </q-dialog>

        <div class="tw-fixed tw-z-50 tw-bottom-5 tw-right-5">
            <q-btn class="tw-py-2 tw-px-4 tw-bg-gray-100" unelevated :icon="PlayingAudio ? 'music_note' : 'music_off'" @click.prevent="PlayingAudio ? pauseMusic(Audio) : playMusic(Audio) "/>
        </div>
        <div class="tw-relative">
            <img src="img/16436960169351.png" class="tw-w-full tw-hidden lg:tw-block tw-h-screen tw-object-cover" alt="Background">
            <img src="img/cover-mobile.webp" class="tw-w-full tw-block lg:tw-hidden tw-h-screen tw-object-cover" alt="Background">
            <div class="tw-absolute tw-mt-10 lg:tw-mt-0 tw-top-52 lg:tw-top-72 tw-left-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-text-white tw-text-center">
                <div data-aos="zoom-in" data-aos-duration="1500" class="tw-text-lg tw-font-thin">The Wedding Of</div>
                <div data-aos="zoom-in" data-aos-duration="1500" class="tw-font-qwigley tw-text-8xl lg:tw-text-8xl">Eva <br> & <br> Vian</div>
                <div data-aos="zoom-in" data-aos-duration="1500" class="tw-text-lg tw-font-thin">27 . 04 . 2022</div>
            </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1500" class="tw-px-5 lg:tw-px-48 tw-py-10 lg:tw-py-24">
            <div class="tw-flex tw-text-center">
                <div class="tw-w-36 lg:tw-w-40">
                    <img src="img/bungakiri.png" alt="bungakiri">
                </div>
                <p class="tw-text-xs lg:tw-text-base tw-mt-5 tw-text-light tw-italic tw-px-3">TUHAN Allah berfirman: "Tidak baik, kalau manusia itu seorang diri saja. Aku akan menjadikan penolong baginya, yang sepadan dengan dia."</p>
                <div class="tw-w-40 lg:tw-w-52">
                    <img src="img/bungakanan.png" alt="bungakanan">
                </div>
            </div>
            <div class="tw-text-center lg:tw-mt-0">
                <p>Kejadian 2:18</p>
            </div>
        </div>

    <div class="tw-flex tw-px-5 lg:tw-px-60 tw-py-5">
        <div class="tw-w-full lg:tw-flex tw-justify-between lg:tw-justify-around tw-flex-row tw-space-y-10 lg:tw-space-y-0">
          <div data-aos="fade-right" data-aos-duration="1500" class="tw-flex tw-flex-col tw-w-full lg:tw-w-52 tw-space-y-5">
              <img src="img/Bride.png" alt="Bride" class="tw-w-32 lg:tw-w-full tw-mx-auto ">
              <div class="tw-text-center tw-space-y-2">
              <p>Eva Oktaviana</p>
              <p class="tw-text-xs lg:tw-text-sm">Putri Kedua Bapak Nasirudin & Ibu Rusmina Simbolon</p>
              </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1500" class="tw-flex tw-flex-col tw-w-full md:tw-w-52 tw-space-y-5">
              <img src="img/Groom.png" alt="Groom" class="tw-w-32 lg:tw-w-full tw-mx-auto">
              <div class="tw-text-center tw-space-y-2">
              <p>Charisma Vian Geslianto </p>
              <p class="tw-text-xs lg:tw-text-sm">Putra Pertama Alm Bapak Paidi & Ibu Yutini Soleka</p>
              </div>
          </div>

        </div>
    </div>

    <div class="tw-relative tw-text-white tw-py-10 lg:tw-py-20">
        <img src="img/Awan.png" alt="Awan" class="tw-hidden lg:tw-block">
        <img src="img/Awan2.png" alt="Awan" class="tw-block tw-h-96 lg:tw-hidden">
        <div class="tw-absolute tw-top-60 lg:tw-top-60 tw-left-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-text-center">
            <div data-aos="fade-down" data-aos-duration="1500" class="tw-font-light tw-text-sm">SAVE THE DAY</div>
            <div data-aos="fade-down" data-aos-duration="1500" class="tw-text-4xl lg:tw-text-7xl tw-font-qwigley">27 Maret 2022</div>
                <vue-countdown :time="TheDate" :interval="100" v-slot="{ days, hours, minutes, seconds }">
                    <div data-aos="fade-up" data-aos-duration="1500" class="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-10 lg:tw-space-x-5 tw-mt-5 lg:tw-mt-10">

                        <div class="tw-flex tw-flex-col tw-text-center">
                            <div class="tw-text-4xl lg:tw-text-6xl">{{ days }}</div>
                            <div class="tw-text-xs tw-font-light">Hari</div>
                        </div>
                        <div class="tw-flex tw-flex-col tw-text-center">
                            <div class="tw-text-4xl lg:tw-text-6xl">{{hours}}</div>
                            <div class="tw-text-xs tw-font-light">Jam</div>
                        </div>
                        <div class="tw-flex tw-flex-col tw-text-center">
                            <div class="tw-text-4xl lg:tw-text-6xl">{{minutes}}</div>
                            <div class="tw-text-xs tw-font-light">Menit</div>
                        </div>
                        <div class="tw-flex tw-flex-col tw-text-center">
                            <div class="tw-text-4xl lg:tw-text-6xl">{{seconds}}</div>
                            <div class="tw-text-xs tw-font-light">Detik</div>
                        </div>
                    </div>
                </vue-countdown>
        </div>
    </div>

    <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-x-0 tw-gap-y-10 lg:tw-gap-0 lg:tw-gap-x-20 tw-px-5 lg:tw-px-60 tw-py-10">

        <div data-aos="flip-left" data-aos-duration="1500" class="tw-h-max tw-flex tw-flex-col tw-px-4 lg:tw-px-6 tw-py-4 lg:tw-py-6 tw-border tw-text-center tw-rounded-lg">
            <p class="tw-font-qwigley tw-text-5xl">Pemberkatan</p>
            <div class="tw-mt-7 tw-space-y-3 tw-text-base">
                <p>-- 27 Maret 2022 --</p>
                <p>Pukul 09:00 - 11.00</p>
            </div>
            <div class="tw-mt-10 tw-space-y-2">
                <p class="tw-font-semibold tw-font-ubuntu tw-text-base">Gereja Masehi Advent Hari Ketujuh Jemaat Salatiga</p>
                <p class="tw-font-light tw-text-sm">Jl. Hasanudin No.100, Dukuh, Kec. Sidomukti, Kota Salatiga, Jawa Tengah 50724</p>
            </div>
            <div class="tw-flex tw-justify-center tw-mt-20">
                <a href="https://maps.app.goo.gl/RKjWjSjrwMzW5dYn6">
                    <div class="tw-w-max tw-px-5 tw-py-2 tw-rounded-md tw-bg-black tw-text-white">Buka Lokasi</div>
                </a>
            </div>
        </div>

        <div data-aos="flip-right" data-aos-duration="1500" class="tw-flex tw-flex-col tw-px-4 tw-py-4 lg:tw-px-6 lg:tw-py-6 tw-border tw-text-center tw-rounded-lg">
        <p class="tw-font-qwigley tw-text-5xl">Resepsi</p>
        <div class="tw-mt-7 tw-space-y-3 tw-text-base">
            <p>-- 27 Maret 2022 --</p>
            <p class="tw-font-semibold">Sesi 1</p>
            <p>Pukul 12:00 - 13.00</p>
            <p class="tw-font-semibold">Sesi 2</p>
            <p>Pukul 13:00 - 14.00</p>
        </div>
        <div class="tw-mt-10 tw-space-y-2">
            <p class="tw-font-semibold tw-font-ubuntu tw-text-base">Joglo Ki Penjawi</p>
            <p class="tw-font-light tw-text-sm">Jl. Pulutan Raya, Pulutan, Singosari Ujung, Kab Semarang</p>
        </div>
        <div class="tw-flex tw-justify-center tw-mt-20">
            <a href="https://maps.app.goo.gl/quqSdroLEcsq8Gax5">
                <div class="tw-w-max tw-px-5 tw-py-2 tw-rounded-md tw-bg-black tw-text-white">Buka Lokasi</div>
            </a>
        </div>
        </div>

    </div>

    <div class="tw-px-5 lg:tw-px-52 tw-py-10 lg:tw-py-20">
        <div data-aos="slide-up" data-aos-duration="1500" class="tw-text-center tw-px-5 lg:tw-px-10 tw-space-y-3">
          <p class="tw-font-qwigley tw-text-5xl lg:tw-text-7xl">Cerita Kita</p>
          <p class="tw-text-xs lg:tw-text-sm tw-font-light">Banyak cerita yang kami lalui sehingga akhirnya kami bisa bersatu, cerita yang akan kami kenang selalu, dan cerita itu kami bagi untuk anda.</p>
        </div>

        <div class="tw-mt-14 lg:tw-mt-28">
        <q-timeline :layout="layout" color="secondary">
            <q-timeline-entry data-aos="slide-right" data-aos-duration="1500" class="tw-text-lg lg:tw-text-xl" title="Pertama Kali Berjumpa" subtitle="15 Febuari 2019" side="left">
              <div class="tw-text-xs lg:tw-text-sm lg:tw-text-right tw-font-light">
                  <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s -->
                    Bak cerita-cerita sinetron. Kami berjumpa di depan Lift Apartemen, saat itu lah cinta pada pandangan pertama terjadi. Siapa yang menduga cerita dongeng seperti itu bisa menjadi awal kisah cinta kami.
              </div>
            </q-timeline-entry>
            <q-timeline-entry data-aos="slide-left" data-aos-duration="1500" class="tw-text-lg lg:tw-text-xl" title="Pertunangan Kami" subtitle="26 Desember 2021" side="right">
              <div class="tw-text-xs lg:tw-text-sm tw-text-left tw-font-light">
                  Setelah 2 tahun menjalani masa pendekatan dan saling mengenal. Kami memutuskan sudah waktunya kita melanjutkan ke jenjang yang lebih serius.
              </div>
            </q-timeline-entry>
            <q-timeline-entry data-aos="slide-up" data-aos-duration="1500" class="tw-text-lg lg:tw-text-xl" title="Pernikahan Kami" subtitle="27 Maret 2022" side="left">
              <div class="tw-text-xs lg:tw-text-sm lg:tw-text-right tw-font-light">
                  The world is full of lonely people afraid to make the first move. Its my first move and she said YES. Fuck yeah! We're getting married!
              </div>
            </q-timeline-entry>
        </q-timeline>
        </div>
    </div>

    <div class="tw-relative tw-py-10">
        <img src="img/Vidio.png" alt="" class="tw-hidden lg:tw-block">
        <img src="img/Vidio2.png" alt="" class="tw-block lg:tw-hidden">
        <div class="tw-absolute tw-top-40 lg:tw-top-80 tw-left-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2">
          <p data-aos="fade-down" data-aos-duration="1500" class="tw-text-6xl lg:tw-text-8xl tw-font-qwigley tw-text-white tw-text-center">Video Kami</p>
          <!-- <div class="tw-hidden lg:tw-block">
              <iframe class="tw-rounded-xl" width="500" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div>
          <div class="tw-block lg:tw-hidden">
              <iframe class="tw-rounded-xl" width="260" height="150" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div> -->
              <div data-aos="fade-up" data-aos-duration="1500" class="tw-hidden lg:tw-block">
                  <iframe src="https://drive.google.com/file/d/1FKIsVpla-pBHOVIMQk59xW1biQJWyjDc/preview" width="600" height="315" allow="autoplay"></iframe>
              </div>
              <div data-aos="fade-up" data-aos-duration="1500" class="tw-block lg:tw-hidden">
                  <iframe src="https://drive.google.com/file/d/1FKIsVpla-pBHOVIMQk59xW1biQJWyjDc/preview" width="260" height="150" allow="autoplay"></iframe>
              </div>
        </div>
    </div>

    <div class="tw-px-5 lg:tw-px-32 tw-py-10 tw-text-center">
        <p data-aos="flip-left" data-aos-duration="1500" class="tw-font-qwigley tw-text-5xl lg:tw-text-7xl">Gallery Foto</p>
        <div class="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-5 tw-mt-10">
          <div data-aos="fade-down" data-aos-duration="1500" v-for="x in Gallery" :key="x">
              <img :src="x.Url" alt="">
          </div>
        </div>

        <div class="tw-grid lg:tw-grid-cols-2 tw-gap-5 tw-mt-5">
          <div data-aos="fade-up" data-aos-duration="1500" v-for="x in Y" :key="x">
              <img :src="x.Url" alt="">
          </div>
        </div>

        <div class="lg:tw-flex tw-gap-5 tw-mt-5">
            <div data-aos="fade-right" data-aos-duration="1500" class="tw-flex-1 tw-grid tw-grid-cols-2 tw-gap-5">
                <div v-for="x in Z" :key="x">
                <img :src="x.Url" alt="">
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" class="tw-flex-1 tw-mt-5 lg:tw-mt-0">
                <div class="">
                <img src="img/c.png" alt="">
                </div>
            </div>
        </div>

        <!-- <div class="tw-grid tw-grid-cols-2 tw-gap-x-5 tw-mt-5">
        <div>
            <div v-for="x in Z" :key="x">
            <img :src="x.Url" alt="">
            </div>
        </div>

        <div>
            <div>
            <img src="img/c.png" alt="">
            </div>
        </div>
        </div> -->
    </div>

    <div class="tw-px-5 lg:tw-px-32 tw-text-center tw-my-20">
        <p data-aos="zoom-in-down" data-aos-duration="1500" class="tw-font-qwigley tw-text-5xl lg:tw-text-7xl">Berikan Hadiah</p>
        <div class="tw-px-8 tw-py-8 tw-border">
            <q-img data-aos="zoom-in" data-aos-duration="1500" src="img/qr_code_bca.jpeg" class="tw-w-72"/>
        </div>
    </div>

    <div class="tw-px-5 lg:tw-px-32 tw-py-10 lg:tw-py-20">
        <p data-aos="zoom-out" data-aos-duration="1500" class="tw-font-qwigley tw-text-5xl lg:tw-text-7xl">Konfirmasi Kehadiran</p>
        <p data-aos="zoom-out" data-aos-duration="1500" class="tw-text-xs lg:tw-text-sm tw-font-light">Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan terima kasih.</p>
        <div data-aos="fade-down" data-aos-duration="1500" class="tw-px-8 tw-py-8 lg:tw-px-16 lg:tw-py-12 tw-border tw-mt-10 tw-rounded-lg">
        <form @submit.prevent="" class="tw-full tw-space-y-6">
            <div class="tw-flex tw-flex-col lg:tw-flex-row tw-flex-wrap tw--mx-3 tw-space-x-0 tw-space-y-5 lg:tw-space-y-0 lg:tw-space-x-5">
            <div class="tw-flex-1">
                <label class="tw-block tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">
                    Name
                </label>
                <q-input dense filled v-model="Name" type="text" placeholder="Name" class="tw-text-xs" />
            </div>
            <div class="tw-flex-1">
                <label class="tw-block tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">
                    Jumlah Orang
                </label>
                <q-select dense filled v-model="Jumlah" type="text" :options="[{label: '1 Orang', value: 1}, {label: '2 Orang', value: 2}]" placeholder="Jumlah Orang" class="tw-text-xs" />
            </div>
            </div>

            <div class="tw-flex tw--mx-3">
            <div class="tw-w-full">

                <label class="tw-block tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">
                    Pesan
                </label>
                <q-input filled v-model="Pesan" type="textarea" placeholder="Pesan" class="tw-text-xs" />
            </div>
            </div>
            <div class="tw-flex tw-flex-col tw--mx-3">
                <label class="tw-block tw-tracking-wide tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-2">
                    Konfirmasi Kehadiran
                </label>
                <div class="tw-flex tw-flex-col tw-text-xs">
                    <q-radio size="sm" v-model="Konfirmasi" val="Hadir resepsi sesi 1" label="Hadir resepsi sesi 1" />
                    <q-radio size="sm" v-model="Konfirmasi" val="Hadir resepsi sesi 2" label="Hadir resepsi sesi 2" />
                    <q-radio size="sm" v-model="Konfirmasi" val="Saya tidak yakin" label="Saya tidak yakin" />
                    <q-radio size="sm" v-model="Konfirmasi" val="Maaf, saya tidak bisa hadir" label="Maaf, saya tidak bisa hadir" />
                </div>
            </div>
            <button class="tw-w-full tw-px-16 tw-py-2 tw-text-sm tw-rounded-sm tw-text-white tw-bg-gray-600" @click="savePresence">
            Kirim
            </button>
        </form>
        </div>
    </div>

    <div class="tw-px-5 lg:tw-px-32 tw-py-10">
        <p data-aos="zoom-out" data-aos-duration="1500" class="tw-font-qwigley tw-text-7xl tw-text-center lg:tw-text-left">Katakan Sesuatu</p>
        <div data-aos="fade-down" data-aos-duration="1500" class="tw-px-8 tw-py-8 lg:tw-px-16 lg:tw-py-12 tw-border tw-mt-10 tw-rounded-lg">
        <form @submit.prevent="" class="tw-full tw-space-y-6">
            <div class="tw-flex tw-flex-row tw-space-x-5">
            <div class="tw-flex-1 tw-space-y-8">
                <div>
                <label class="tw-block tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">
                    Name
                </label>
                <q-input filled v-model="GivingName" type="text" placeholder="Name" class="tw-text-xs" />
                </div>
                <div>
                <label class="tw-block tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">
                    Ucapan
                </label>
                <q-input filled v-model="Ucapan" type="textarea" placeholder="Ucapan" class="tw-text-xs" />
                </div>
                <button class="tw-w-full tw-px-16 tw-py-2 tw-text-sm tw-rounded-sm tw-text-white tw-bg-gray-600" @click="saveOutGiving">
                Kirim
                </button>
            </div>
            <div class="tw-hidden lg:tw-block tw-flex-1">
                <img src="img/1643649327582 1.png" alt="" class="tw-mt-7">
            </div>
            </div>
        </form>

        </div>
        <div v-if="OutGivings.length > 0">
            <q-scroll-area  class="tw-h-96 tw-mt-10 tw-pb-2">
                <div v-for="og in OutGivings" :key="og.id" class="tw-flex tw-flex-row tw-px-5 tw-py-2">
                    <div class="tw-w-full tw-px-3 lg:tw-px-7 tw-text-xs lg:tw-text-sm tw-py-3 tw-bg-gray-100 tw-space-y-3 tw-rounded-lg">
                        <p class="tw-font-semibold">{{ og.name }}</p>
                        <div class="tw-text-xs tw-font-light">{{ og.message }} </div>
                    </div>
                </div>
            </q-scroll-area>
        </div>

        <div v-else>
            <!-- Kalo gak ada data -->
        </div>
    </div>


    <div class="tw-bg-gray-600 tw-text-white tw-mt-60 tw-py-5 tw-font-light tw-text-center">
        © 2022 anywedd. All Rights Reserved
    </div>


    </q-layout>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'

import { useQuasar } from 'quasar'

import VueCountdown from '@chenfengyuan/vue-countdown';

const Gallery = [
  {
    Url: 'img/img1.png'
  },
  {
    Url: 'img/img2.png'
  },
  {
    Url: 'img/img3.png'
  },
  {
    Url: 'img/img4.png'
  },
]

const Y = [
  {
    Url: 'img/1643696033423 1.png'
  },
  {
    Url: 'img/1643648384220 (1) 1.png'
  }
]

const Z = [
  {
    Url: 'img/a.png'
  },
  {
    Url: 'img/b.png'
  },
]

const Now = new Date()
const MarriageDate = new Date("2022-03-27")

export default defineComponent({
    name: 'index',
    components: {
        VueCountdown
    },
    setup() {
        const $q = useQuasar()
        return {
            PersonInvited: ref(),
            TheDate: ref(MarriageDate - Now),
            OutGivings: ref([]),
            SpecialInvited: ref(false),
            PlayingAudio: ref(false),
            Audio: ref('music/Paul Anka  Put Your Head on My Shoulder Cover by The Macarons Project.mp3'),

            Name: ref(''),
            GivingName: ref(''),
            Ucapan: ref(''),
            Jumlah: ref(null),
            Pesan: ref(''),
            Konfirmasi: ref(''),
            Sesi: ref(''),
            Gallery,
            Y,
            Z,
            layout: computed(() => {
                return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
            })
        }
    },
    mounted() {
        this.getInvited()
        this.getOutGiving()
    },
    methods: {
        getInvited() {
            let param = this.$route.query.to
            
            if (param) {
                this.PersonInvited = param
                this.SpecialInvited = true
            }                
        },
        playMusic() {
            this.SpecialInvited = false
            this.PlayingAudio = true
            let audio = new Audio(this.Audio)
            audio.play()
        },

        pauseMusic() {
            this.PlayingAudio = false
            var audio = new Audio(this.Audio)
            audio.pause()
        },
        
        getOutGiving() {
            let vm = this

            vm.$api.get('/outgivings').then((ress) => {
                vm.OutGivings = ress.data
            })
        },

        savePresence() {
            let vm = this
            let data = {
                "name": this.Name,
                "num_of_people": this.Jumlah.value,
                "confirmation": this.Konfirmasi,
                "message": this.Pesan
            }

            vm.$api.post('/presences', data).then((ress) => {
                console.log(ress)
                vm.getOutGiving()
            })
        },

        saveOutGiving() {
            let vm = this
            let data = {
                "name": this.GivingName,
                "message": this.Ucapan
            }

            vm.$api.post('/outgivings', data).then((ress) => {
                console.log(ress)
            })
        }
    },
})
</script>
