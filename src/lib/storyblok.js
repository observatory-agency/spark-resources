import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import ResourceCard from '$storyblok/ResourceCard.svelte';
import Dashboard from '$storyblok/Dashboard.svelte';
import lpHeroForm from '$storyblok/lpHeroForm.svelte';
import LandingPage from '$storyblok/LandingPage.svelte';
import lpSimpleHero from '$storyblok/lpSimpleHero.svelte';
import lpSectionHeader from '$storyblok/lpSectionHeader.svelte';
import lpFeatureList from '$storyblok/lpFeatureList.svelte';
import lpFeatureTextImage from '$storyblok/lpFeatureTextImage.svelte';
import lpPatternCTA from '$storyblok/lpPatternCTA.svelte';
import lpFeatureLargeImage from '$storyblok/lpFeatureLargeImage.svelte';
import lpCardGrid from '$storyblok/lpCardGrid.svelte';
import lpSimpleCard from '$storyblok/lpSimpleCard.svelte';
import lpIconCard from '$storyblok/lpIconCard.svelte';
import lpVideoSection from '$storyblok/lpVideoSection.svelte';

let initialized = false;

export function initStoryblok() {
    if (initialized) {
        return;
    }

    storyblokInit({
        accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
        use: [apiPlugin],
        components: {
            // Resources components
            resource_card: ResourceCard,
            Dashboard: Dashboard,
            // Landing page components
            lp_hero_with_form: lpHeroForm,
            lp_simple_hero: lpSimpleHero,
            lp_card_grid: lpCardGrid,
            lp_simple_card: lpSimpleCard,
            lp_icon_card: lpIconCard,
            lp_section_header: lpSectionHeader,
            lp_feature_text_image: lpFeatureTextImage,
            lp_video_section: lpVideoSection,
            lp_cta_pattern: lpPatternCTA,
            lp_feature_list: lpFeatureList,
            lp_feature_large_image: lpFeatureLargeImage,
            LandingPage: LandingPage
        }
    });

    initialized = true;
}

export async function getStoryblokApi() {
    initStoryblok();
    return useStoryblokApi();
}
