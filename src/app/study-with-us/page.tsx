'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatStudentsSay from "@/components/ui/whatstudentssay";
import FAQ from "@/components/ui/faq";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ExamCategories from "@/components/ui/examcategories";
import TrustedEducation from "@/components/ui/trustededucation";
import TrustedByStudents from "@/components/ui/trustedbystudents";
import BigCtaSection from "@/components/ui/bigctasection";
import ResourcesSection from "@/components/ui/resourcessection";
import YoutubeCTA from "@/components/ui/youtubecta";
import HeroCarousel from "@/components/ui/HeroCarousel";
import NeetIntroSection from "@/components/ui/NeetIntroSection";
import OneShots from "@/components/ui/oneshot";
import CoursesSection from "@/components/ui/coursesSection";




// ================== MAIN PAGE ==================
export default function StudyWithUs() {


  return (
    <div className="font-poppins text-gray-900">
      <HeroCarousel/>
     <TrustedEducation/>
      <ExamCategories/>
      <TrustedByStudents/>
      <BigCtaSection/>
      <WhatStudentsSay />
        <ResourcesSection/>
      <FAQ />
        <YoutubeCTA/>

    </div>
  );
}
