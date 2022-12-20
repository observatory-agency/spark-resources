<script>
	export let resource;
</script>

<a href={resource.url} target="_blank" rel="noreferrer">
	<div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
		<div>
			<img src={resource.img} alt={resource.name} class="object-cover object-center w-full h-56" />
		</div>
		<div class="px-4 py-5 space-y-4 sm:p-6">
			<span
				class="inline-flex items-center rounded-full bg-sparkHeader px-3 py-0.5 text-sm font-medium text-sparkPeach"
				>{resource.category}</span
			>
			<div>
				<h3 class="text-xl font-medium leading-6 text-gray-900">{resource.name}</h3>
				<p class="max-w-2xl mt-2 text-gray-600">{resource.description}</p>
			</div>
		</div>
	</div>
</a>
