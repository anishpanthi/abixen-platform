/**
 * Copyright (c) 2010-present Abixen Systems. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.abixen.platform.service.webcontent.model.web;

import com.abixen.platform.core.util.WebModelJsonSerialize;
import com.abixen.platform.service.webcontent.model.impl.Structure;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;


@JsonDeserialize(as = Structure.class)
public interface StructureWeb {

    @JsonView(WebModelJsonSerialize.class)
    Long getId();

    @JsonView(WebModelJsonSerialize.class)
    String getContent();

}
