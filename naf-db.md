 Schema |              Name              | Type  | Owner 
--------+--------------------------------+-------+-------
 public | auth_group                     | table | root
 public | auth_group_permissions         | table | root
 public | auth_permission                | table | root
 public | django_content_type            | table | root
 public | django_migrations              | table | root
 public | django_ses_sesstat             | table | root
 public | django_session                 | table | root
 public | doc_cms_article                | table | root
 public | doc_cms_book                   | table | root
 public | doc_cms_event                  | table | root
 public | doc_cms_fileattachment         | table | root
 public | doc_cms_imageattachment        | table | root
 public | doc_cms_inthenews              | table | root
 public | doc_cms_page                   | table | root
 public | doc_cms_page_pelican_paths     | table | root
 public | doc_cms_pagemetafield          | table | root
 public | doc_cms_podcast                | table | root
 public | doc_cms_policypaper            | table | root
 public | doc_cms_post                   | table | root
 public | doc_cms_post_authors           | table | root
 public | doc_cms_post_pelican_paths     | table | root
 public | doc_cms_post_programs          | table | root
 public | doc_cms_post_tags              | table | root
 public | doc_cms_pressrelease           | table | root
 public | doc_cms_program                | table | root
 public | doc_cms_program_editors        | table | root
 public | doc_cms_program_featured_posts | table | root
 public | doc_cms_program_writers        | table | root
 public | doc_cms_role                   | table | root
 public | doc_cms_tag                    | table | root
 public | doc_cms_user                   | table | root
 public | doc_cms_user_featured_posts    | table | root
 public | doc_cms_user_pelican_paths     | table | root
 public | doc_cms_user_roles             | table | root
 public | doc_cms_user_tags              | table | root
 public | pelicanizer_pelicanoutputfile  | table | root





                                                           Table "public.doc_cms_program"
       Column        |          Type          |                          Modifiers                           | Storage  | Stats target | Description 
---------------------+------------------------+--------------------------------------------------------------+----------+--------------+-------------
 id                  | integer                | not null default nextval('doc_cms_program_id_seq'::regclass) | plain    |              | 
 name                | character varying(255) | not null                                                     | extended |              | 
 slug                | character varying(50)  | not null                                                     | extended |              | 
 description         | text                   | not null                                                     | extended |              | 
 newsletter          | character varying(255) | not null                                                     | extended |              | 
 twitter             | character varying(100) | not null                                                     | extended |              | 
 facebook            | character varying(100) | not null                                                     | extended |              | 
 youtube             | character varying(100) | not null                                                     | extended |              | 
 googleplus          | character varying(100) | not null                                                     | extended |              | 
 linkedin            | character varying(100) | not null                                                     | extended |              | 
 tumblr              | character varying(100) | not null                                                     | extended |              | 
 cover_story_visible | boolean                | not null                                                     | plain    |              | 
 books_visible       | boolean                | not null                                                     | plain    |              | 
 cover_story_id      | integer                |                                                              | plain    |              | 
 pelican_directory   | character varying(50)  |                                                              | extended |              | 
Indexes:
    "doc_cms_program_pkey" PRIMARY KEY, btree (id)
    "doc_cms_program_222da264" btree (cover_story_id)
    "doc_cms_program_2dbcba41" btree (slug)
    "doc_cms_program_slug_161e68c2c4c9979a_like" btree (slug varchar_pattern_ops)
Foreign-key constraints:
    "doc_cms_prog_cover_story_id_18bddd4502dc14cc_fk_doc_cms_post_id" FOREIGN KEY (cover_story_id) REFERENCES doc_cms_post(id) DEFERRABLE INITIALLY DEFERRED
Referenced by:
    TABLE "doc_cms_page" CONSTRAINT "doc_cms_page_program_id_3ab27002f0997a5b_fk_doc_cms_program_id" FOREIGN KEY (program_id) REFERENCES doc_cms_program(id) DEFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_post_programs" CONSTRAINT "doc_cms_post_p_program_id_3dffd4cb9ccef29_fk_doc_cms_program_id" FOREIGN KEY (program_id) REFERENCES doc_cms_program(id) DEFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_program_editors" CONSTRAINT "doc_cms_progr_program_id_5f925555c0192258_fk_doc_cms_program_id" FOREIGN KEY (program_id) REFERENCES doc_cms_program(id) DEFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_program_featured_posts" CONSTRAINT "doc_cms_progr_program_id_62a341da8421feb1_fk_doc_cms_program_id" FOREIGN KEY (program_id) REFERENCES doc_cms_program(id) DEFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_program_writers" CONSTRAINT "doc_cms_progr_program_id_74a481b691f97e72_fk_doc_cms_program_id" FOREIGN KEY (program_id) REFERENCES doc_cms_program(id) DEFERRABLE INITIALLY DEFERRED
Has OIDs: no





                                                             Table "public.doc_cms_post"
        Column        |           Type           |                         Modifiers                         | Storage  | Stats target | Description 
----------------------+--------------------------+-----------------------------------------------------------+----------+--------------+-------------
 id                   | integer                  | not null default nextval('doc_cms_post_id_seq'::regclass) | plain    |              | 
 created              | timestamp with time zone | not null                                                  | plain    |              | 
 modified             | timestamp with time zone | not null                                                  | plain    |              | 
 generated_at         | timestamp with time zone |                                                           | plain    |              | 
 slug                 | character varying(255)   | not null                                                  | extended |              | 
 title                | character varying(255)   | not null                                                  | extended |              | 
 sub_headline         | text                     |                                                           | extended |              | 
 summary              | text                     |                                                           | extended |              | 
 cover_image          | character varying(255)   | not null                                                  | extended |              | 
 cover_image_height   | integer                  |                                                           | plain    |              | 
 cover_image_width    | integer                  |                                                           | plain    |              | 
 cover_image_caption  | text                     |                                                           | extended |              | 
 cover_image_credit   | text                     |                                                           | extended |              | 
 deck                 | text                     |                                                           | extended |              | 
 content              | text                     |                                                           | extended |              | 
 archived             | boolean                  | not null                                                  | plain    |              | 
 deleted              | boolean                  | not null                                                  | plain    |              | 
 draft                | boolean                  | not null                                                  | plain    |              | 
 published            | boolean                  | not null                                                  | plain    |              | 
 publish_at           | timestamp with time zone |                                                           | plain    |              | 
 locked_by_id         | integer                  |                                                           | plain    |              | 
 modified_by_id       | integer                  |                                                           | plain    |              | 
 polymorphic_ctype_id | integer                  |                                                           | plain    |              | 
Indexes:
    "doc_cms_post_pkey" PRIMARY KEY, btree (id)
    "doc_cms_post_2dbcba41" btree (slug)
    "doc_cms_post_36d90bd2" btree (locked_by_id)
    "doc_cms_post_b3da0983" btree (modified_by_id)
    "doc_cms_post_d3e32c49" btree (polymorphic_ctype_id)
    "doc_cms_post_slug_20d24f9199562dc3_like" btree (slug varchar_pattern_ops)
Check constraints:
    "doc_cms_post_cover_image_height_check" CHECK (cover_image_height >= 0)
    "doc_cms_post_cover_image_width_check" CHECK (cover_image_width >= 0)
Foreign-key constraints:
    "D0f431be31fac877fe972540e4b1dad9" FOREIGN KEY (polymorphic_ctype_id) REFERENCES django_content_type(id) DEFERRABLE INITIALLY DEFERRED
    "doc_cms_post_locked_by_id_5f3324a7c30b5990_fk_doc_cms_user_id" FOREIGN KEY (locked_by_id) REFERENCES doc_cms_user(id) DEFERRABLE INITIALLY DEFERRED
    "doc_cms_post_modified_by_id_795adcbc49c5c4c5_fk_doc_cms_user_id" FOREIGN KEY (modified_by_id) REFERENCES doc_cms_user(id) DEFERRABLE INITIALLY DEFERRED
Referenced by:
    TABLE "doc_cms_article" CONSTRAINT "doc_cms_article_post_ptr_id_7164d35a19859f6d_fk_doc_cms_post_id" FOREIGN KEY (post_ptr_id) REFERENCES doc_cms_post(id) DEFE
RRABLE INITIALLY DEFERRED
    TABLE "doc_cms_book" CONSTRAINT "doc_cms_book_post_ptr_id_488514aa4d8214ab_fk_doc_cms_post_id" FOREIGN KEY (post_ptr_id) REFERENCES doc_cms_post(id) DEFERRABLE
 INITIALLY DEFERRED
    TABLE "doc_cms_event" CONSTRAINT "doc_cms_event_post_ptr_id_700c041099677da9_fk_doc_cms_post_id" FOREIGN KEY (post_ptr_id) REFERENCES doc_cms_post(id) DEFERRAB
LE INITIALLY DEFERRED
    TABLE "doc_cms_fileattachment" CONSTRAINT "doc_cms_fileattachm_post_id_4baa10c74e7d0e78_fk_doc_cms_post_id" FOREIGN KEY (post_id) REFERENCES doc_cms_post(id) D
EFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_imageattachment" CONSTRAINT "doc_cms_imageattach_post_id_339f403c28bfc292_fk_doc_cms_post_id" FOREIGN KEY (post_id) REFERENCES doc_cms_post(id) 
DEFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_inthenews" CONSTRAINT "doc_cms_inthene_post_ptr_id_787ba7908d1b837c_fk_doc_cms_post_id" FOREIGN KEY (post_ptr_id) REFERENCES doc_cms_post(id) DE
FERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_podcast" CONSTRAINT "doc_cms_podcast_post_ptr_id_12db964313a3d7e1_fk_doc_cms_post_id" FOREIGN KEY (post_ptr_id) REFERENCES doc_cms_post(id) DEFE
RRABLE INITIALLY DEFERRED
    TABLE "doc_cms_policypaper" CONSTRAINT "doc_cms_policyp_post_ptr_id_7c2620d6021d563d_fk_doc_cms_post_id" FOREIGN KEY (post_ptr_id) REFERENCES doc_cms_post(id) 
DEFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_post_authors" CONSTRAINT "doc_cms_post_author_post_id_133cce1bde440a60_fk_doc_cms_post_id" FOREIGN KEY (post_id) REFERENCES doc_cms_post(id) DEF
ERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_post_pelican_paths" CONSTRAINT "doc_cms_post_pelica_post_id_64cdd4329a7f6471_fk_doc_cms_post_id" FOREIGN KEY (post_id) REFERENCES doc_cms_post(i
d) DEFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_post_programs" CONSTRAINT "doc_cms_post_progra_post_id_1ba00cdce689d5a2_fk_doc_cms_post_id" FOREIGN KEY (post_id) REFERENCES doc_cms_post(id) DE
FERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_post_tags" CONSTRAINT "doc_cms_post_tags_post_id_5cd82b109c91e80a_fk_doc_cms_post_id" FOREIGN KEY (post_id) REFERENCES doc_cms_post(id) DEFERRAB
LE INITIALLY DEFERRED
    TABLE "doc_cms_pressrelease" CONSTRAINT "doc_cms_pressrel_post_ptr_id_18caa0c1a28d748_fk_doc_cms_post_id" FOREIGN KEY (post_ptr_id) REFERENCES doc_cms_post(id)
 DEFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_program" CONSTRAINT "doc_cms_prog_cover_story_id_18bddd4502dc14cc_fk_doc_cms_post_id" FOREIGN KEY (cover_story_id) REFERENCES doc_cms_post(id) D
EFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_program_featured_posts" CONSTRAINT "doc_cms_program_feat_post_id_760993c74e0f708_fk_doc_cms_post_id" FOREIGN KEY (post_id) REFERENCES doc_cms_po
st(id) DEFERRABLE INITIALLY DEFERRED
    TABLE "doc_cms_user_featured_posts" CONSTRAINT "doc_cms_user_featur_post_id_4edd0233d9ec228c_fk_doc_cms_post_id" FOREIGN KEY (post_id) REFERENCES doc_cms_post(
id) DEFERRABLE INITIALLY DEFERRED
Has OIDs: no
