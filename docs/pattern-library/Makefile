styledown = /usr/local/bin/styledown

index.html: \
	../sass/base/_base.scss \
	../sass/base/_font.scss \
	../sass/base/_grid.scss \
	../sass/components/_alert.scss \
	../sass/components/_button.scss \
	../sass/components/_card-title.scss \
	../sass/components/_card.scss \
	../sass/components/_checkbox.scss \
	../sass/components/_field-information.scss \
	../sass/components/_input.scss \
	../sass/components/_label.scss \
	../sass/components/_radio.scss \
	../sass/components/_title-field.scss \
	../sass/components/_title-section.scss \
	../sass/components/_title.scss \
	../sass/components/_value-hotel.scss \
	../sass/components/_value-provider.scss
	$(styledown) $^ > $@
