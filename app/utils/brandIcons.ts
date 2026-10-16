import { h, type FunctionalComponent } from 'vue';
import LocalBrandIcon from '~/components/local/BrandIcon.vue';
import type { Brand } from '~/types/socialLink';

function createBrandIcon(brand: Brand): FunctionalComponent {
    return () => h(LocalBrandIcon, { brand });
}

export const brandIcons: Record<Brand, FunctionalComponent> = {
    github: createBrandIcon('github'),
    linkedin: createBrandIcon('linkedin'),
    strava: createBrandIcon('strava'),
};
