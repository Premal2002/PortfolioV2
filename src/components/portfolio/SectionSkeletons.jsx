// src/components/portfolio/SectionSkeletons.jsx
// ─── Drop-in skeleton layouts that match each section's structure ─────────────
// Usage in each section:
//   const [sectionRef, inView] = useInView();
//   if (!inView) return <AboutSkeleton />;
//   return <real content with ref={sectionRef} ... />
//
// The ref must remain on the SKELETON wrapper so IntersectionObserver fires.
// Each skeleton receives the ref as a prop from the section.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { Skeleton } from "../ui/skeleton";

// ── Reusable section header skeleton (label + heading) ───────────────────────
const SectionHeaderSkeleton = () => (
    <div className="mb-12">
        <div className="flex items-center gap-4 mb-12">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-px flex-1" />
        </div>
        <Skeleton className="h-12 w-64 mb-2" />
    </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────────────
export const AboutSkeleton = React.forwardRef((_, ref) => (
    <section id="about" className="bg-brand-bg py-16 md:py-20">
        <div ref={ref} className="max-w-[87.5rem] mx-auto px-10">
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left – text block */}
                <div className="space-y-4">
                    <Skeleton className="h-12 w-3/4" />
                    <Skeleton className="h-12 w-1/2 mb-8" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-full mt-4" />
                    <Skeleton className="h-4 w-4/5" />
                </div>
                {/* Right – 3 highlight cards */}
                <div className="flex flex-col gap-5">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="flex gap-5 p-6 rounded-xl border border-brand-border/30"
                        >
                            <Skeleton className="w-12 h-12 rounded-lg flex-shrink-0" />
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-3 w-full" />
                                <Skeleton className="h-3 w-4/5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
));
AboutSkeleton.displayName = "AboutSkeleton";

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────────────────────
export const SkillsSkeleton = React.forwardRef((_, ref) => (
    <section id="skills" className="bg-brand-bg py-16 md:py-20">
        <div ref={ref} className="max-w-[87.5rem] mx-auto px-10">
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                        key={i}
                        className="p-6 rounded-xl border border-brand-border/30 bg-brand-surface/10"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <Skeleton className="w-10 h-10 rounded-lg" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 4 + (i % 3) }).map((_, j) => (
                                <Skeleton key={j} className="h-7 w-16 rounded-full" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
));
SkillsSkeleton.displayName = "SkillsSkeleton";

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────────────────────
export const ExperienceSkeleton = React.forwardRef((_, ref) => (
    <section id="experience" className="bg-brand-bg py-16 md:py-20">
        <div ref={ref} className="max-w-[87.5rem] mx-auto px-10">
            <SectionHeaderSkeleton />
            <div className="flex flex-col gap-10">
                {[0, 1].map((i) => (
                    <div key={i} className="flex gap-6 md:gap-10">
                        {/* Dot */}
                        <div className="hidden md:flex flex-shrink-0">
                            <Skeleton className="w-10 h-10 rounded-full" />
                        </div>
                        {/* Card */}
                        <div className="flex-1 p-6 md:p-8 rounded-xl border border-brand-border/30 bg-brand-surface/10 space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <Skeleton className="h-6 w-48" />
                                    <Skeleton className="h-4 w-36" />
                                </div>
                                <Skeleton className="h-6 w-28 rounded-full" />
                            </div>
                            <div className="space-y-3">
                                {Array.from({ length: 3 + i }).map((_, j) => (
                                    <div key={j} className="flex gap-3">
                                        <Skeleton className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                        <Skeleton className="h-4 flex-1" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 pt-1">
                                {Array.from({ length: 5 }).map((_, j) => (
                                    <Skeleton key={j} className="h-6 w-20 rounded-md" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
));
ExperienceSkeleton.displayName = "ExperienceSkeleton";

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectsSkeleton = React.forwardRef((_, ref) => (
    <section id="projects" className="bg-brand-bg py-16 md:py-20">
        <div ref={ref} className="max-w-[87.5rem] mx-auto px-10">
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="p-8 rounded-2xl border border-brand-border/30 bg-brand-surface/10 space-y-5"
                    >
                        <div className="flex items-start justify-between">
                            <Skeleton className="w-14 h-14 rounded-xl" />
                            <Skeleton className="h-5 w-16 rounded" />
                        </div>
                        <Skeleton className="h-7 w-3/4" />
                        <div className="space-y-2">
                            {Array.from({ length: 2 }).map((_, j) => (
                                <div
                                    key={j}
                                    className="pl-4 border-l-2 border-brand-border/30 space-y-1"
                                >
                                    <Skeleton className="h-3 w-full" />
                                    <Skeleton className="h-3 w-5/6" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 5 + (i % 3) }).map((_, j) => (
                                <Skeleton key={j} className="h-7 w-16 rounded-full" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
));
ProjectsSkeleton.displayName = "ProjectsSkeleton";

// ─────────────────────────────────────────────────────────────────────────────
// CREDENTIALS
// ─────────────────────────────────────────────────────────────────────────────
export const CredentialsSkeleton = React.forwardRef((_, ref) => (
    <section id="credentials" className="bg-brand-bg py-16 md:py-20">
        <div ref={ref} className="max-w-[87.5rem] mx-auto px-10">
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Education */}
                <div className="space-y-6">
                    <Skeleton className="h-12 w-48 mb-12" />
                    {[0, 1].map((i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 p-6 rounded-xl border border-brand-border/30 bg-brand-surface/10"
                        >
                            <Skeleton className="w-12 h-12 rounded-lg flex-shrink-0" />
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-5 w-56" />
                                <Skeleton className="h-4 w-40" />
                                <div className="flex gap-3">
                                    <Skeleton className="h-3 w-24" />
                                    <Skeleton className="h-5 w-20 rounded-md" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Certifications */}
                <div className="space-y-4">
                    <Skeleton className="h-12 w-56 mb-12" />
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 p-5 rounded-xl border border-brand-border/30 bg-brand-surface/10"
                        >
                            <Skeleton className="w-10 h-10 rounded-lg flex-shrink-0" />
                            <div className="flex-1 space-y-1.5">
                                <Skeleton className="h-4 w-4/5" />
                                <div className="flex gap-2">
                                    <Skeleton className="h-3 w-16" />
                                    <Skeleton className="h-3 w-16" />
                                </div>
                            </div>
                            <Skeleton className="h-7 w-14 rounded-lg flex-shrink-0" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
));
CredentialsSkeleton.displayName = "CredentialsSkeleton";

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────────
export const ContactSkeleton = React.forwardRef((_, ref) => (
    <section id="contact" className="bg-brand-bg py-24 md:py-32">
        <div ref={ref} className="max-w-[87.5rem] mx-auto px-10">
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left – contact info */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                    </div>
                    <div className="space-y-5">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className="flex items-center gap-4">
                                <Skeleton className="w-12 h-12 rounded-lg flex-shrink-0" />
                                <div className="space-y-1.5">
                                    <Skeleton className="h-3 w-12" />
                                    <Skeleton className="h-4 w-40" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <Skeleton className="h-10 w-32 rounded-full" />
                        <Skeleton className="h-10 w-28 rounded-full" />
                    </div>
                </div>
                {/* Right – form */}
                <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <Skeleton className="h-3 w-10" />
                            <Skeleton className="h-12 w-full rounded-lg" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-3 w-12" />
                            <Skeleton className="h-12 w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-3 w-16" />
                        <Skeleton className="h-12 w-full rounded-lg" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-3 w-16" />
                        <Skeleton className="h-32 w-full rounded-lg" />
                    </div>
                    <Skeleton className="h-12 w-44 rounded-full" />
                </div>
            </div>
        </div>
    </section>
));
ContactSkeleton.displayName = "ContactSkeleton";