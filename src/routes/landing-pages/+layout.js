import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import lpHeroForm from '$storyblok/lpHeroForm.svelte';
import LandingPage from '$storyblok/LandingPage.svelte';
import lpSimpleHero from '$storyblok/lpSimpleHero.svelte';
import lpCardGrid from '$storyblok/lpCardGrid.svelte';
import lpSimpleCard from '$storyblok/lpSimpleCard.svelte';
import lpIconCard from '$storyblok/lpIconCard.svelte';
import lpSectionHeader from '$storyblok/lpSectionHeader.svelte';
import lpFeatureTextImage from '$storyblok/lpFeatureTextImage.svelte';
import lpVideoSection from '$storyblok/lpVideoSection.svelte';
import lpPatternCTA from '$storyblok/lpPatternCTA.svelte';
import lpFeatureList from '$storyblok/lpFeatureList.svelte';

export async function load() {
	storyblokInit({
		accessToken: 'qJMNGz9DE0CFLbx8xjnfzwtt',
		use: [apiPlugin],
		components: {
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
			LandingPage: LandingPage
		}
	});
	let storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
