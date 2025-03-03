.. include:: /Includes.rst.txt


.. _administration:

==============
Administration
==============

.. _admin_installation:

Installation
============

Refer to TYPO3 documentation for further details on
`installing extensions <https://docs.typo3.org/m/typo3/tutorial-getting-started/main/en-us/Extensions/Index.html>`__.

.. _admin_installation_supported_extensions:

Supported extensions
--------------------

================================ ================
Extension                        Version tested
================================ ================
container_elements               5.0.0
easyconf                         2.0.0
news                             11.0.0
================================ ================

.. _admin_installation_static_templates:

Static templates
----------------

In an installation using `container_elements` and `user_pizpalue` the following
static extension templates would be included:

.. figure:: /Images/Administration/Installation_StaticTemplates.jpg
   :width: 800px
   :alt: Included static extension templates

.. note::
   The order in which the extension templates are included matters: Pizpalue
   related templates are inserted after 3rd party extensions and the site
   package `Customization (user_pizpalue)` comes at the end.


.. _admin_update:

Update
======

After updating this extension the data base structure should be analysed in the
maintenance module and the upgrade wizards from the upgrade module should be
checked for new wizard steps.

.. _admin_upgrade:

Upgrade
=======

.. note::
   Upgrade tasks are only needed to be carried out in case breaking changes were
   introduced between the old and new release. Breaking changes are marked with
   `[!!!]` in the `commit messages <https://github.com/buepro/typo3-pizpalue/commits/main>`__.
   When upgrading please make sure to understand all the breaking changes and
   carry out the wizards from the upgrade module.

The following upgrade descriptions are available:

.. toctree::
   :maxdepth: 1

   Upgrade/v15.0.0
   Upgrade/v14.0.0
   Upgrade/v13.0.0
   Upgrade/v12.0.0


.. _admin_extensions:

Extensions
==========

For some extensions additional packages are available:

.. toctree::
   :maxdepth: 1

   Extensions/Form
   Extensions/News
   Extensions/Eventnews
   Extensions/TtAddress
   Extensions/Felogin


.. _admin_development:

Development / Maintenance
=========================

During development or maintenance phase two actions might be of interest:

#. Show under construction page
#. Enable code debugging

To temporarily show an under construction page an url redirection might be
created and the code debugging might be enabled by setting the site mode in
the "PIZPALUE: AGENCY" category from the constant editor. The following site
modes are available:

=================== ============================================================
Site mode           Description
=================== ============================================================
Production          Used when the site is ready.
Maintenance         Used to temporarily debug code when site is in production.
Develop             Used during site development to debug the code. **SEO is
                    limited. Used only when site has not been in production.**
Review              Used to review the site with the customer. **SEO is limited.
                    Used only when site has not been in production.**
=================== ============================================================

.. note::

   A blinking dot might be shown on the left top side from the website
   indicating the site not being ready for production. The dot disappears when
   the site mode is set to production **and** the current domain corresponds
   to the domain defined in the site configuration.
