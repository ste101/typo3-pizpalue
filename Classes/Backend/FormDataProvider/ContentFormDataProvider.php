<?php

/*
 * This file is part of the package buepro/pizpalue.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

namespace Buepro\Pizpalue\Backend\FormDataProvider;

use TYPO3\CMS\Backend\Form\FormDataProviderInterface;

class ContentFormDataProvider implements FormDataProviderInterface
{
    /**
     * Add form data to result array
     *
     * @param array $result Initialized result array
     * @return array Result filled with more data
     * @throws \Exception
     * @see https://docs.typo3.org/typo3cms/CoreApiReference/8.7/ApiOverview/Database/Migration/Index.html#database-migration
     */
    public function addData(array $result)
    {
        $isNewGridelement = $result['command'] == 'new' && $result['tableName'] == 'tt_content'
            && $result['recordTypeValue'] == 'gridelements_pi1';
        $isContainerGridelement = $result['tableName'] == 'tt_content'
            && $result['recordTypeValue'] == 'gridelements_pi1'
            && $result['databaseRow']['tx_gridelements_backend_layout'] == 'ppContainer';

        if ($isNewGridelement && $isContainerGridelement) {
            $result['databaseRow']['frame_class'] = 'none';
        }
        return $result;
    }
}
